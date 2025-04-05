document.addEventListener("DOMContentLoaded", () => {
    // Make images in .images-row clickable
    const images = document.querySelectorAll(".images-row img");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            const imageName = image.src.split("/").pop().split(".")[0]; // Get the image name without extension
            window.location.href = `${imageName}.html`; // Redirect to corresponding HTML page
        });
    });

    // Make the logo clickable
    const logo = document.querySelector(".logo-row .logo");
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "index.html"; // Redirect to index.html
        });
    }
});