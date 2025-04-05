const lines = [
    { className: '.line1', newText: "STEEL WITH A REAL SOUL", originalText: "本物の魂を持った鋼鉄", targetPage: "page1.html" },
    { className: '.line2', newText: "SURPASS WHAT WAS POSSIBLE", originalText: "可能性を超える", targetPage: "page2.html" },
    { className: '.line3', newText: "DON'T DREAM IT, BUILD IT", originalText: "夢見るのではなく、築くのだ", targetPage: "page3.html" }
];

lines.forEach(line => {
    const element = document.querySelector(line.className);

    // Hover effect for fade-in and fade-out animations
    element.addEventListener('mouseover', function () {
        element.classList.remove('fade-in'); // Reset fade-in class
        element.classList.add('fade-out'); // Start fade-out animation

        element.addEventListener('transitionend', function onFadeOut() {
            element.innerHTML = line.newText; // Change text to the new line
            element.classList.remove('fade-out'); // Remove fade-out
            element.classList.add('fade-in'); // Start fade-in animation
            element.removeEventListener('transitionend', onFadeOut); // Clean up event listener
        });
    });

    element.addEventListener('mouseout', function () {
        element.classList.remove('fade-in'); // Reset fade-in class
        element.classList.add('fade-out'); // Start fade-out animation

        element.addEventListener('transitionend', function onFadeOut() {
            element.innerHTML = line.originalText; // Change text back to the original line
            element.classList.remove('fade-out'); // Remove fade-out
            element.classList.add('fade-in'); // Start fade-in animation
            element.removeEventListener('transitionend', onFadeOut); // Clean up event listener
        });
    });

    // Click event to navigate to the target page
    element.addEventListener('click', function () {
        window.location.href = line.targetPage; // Navigate to the specified page
    });
});