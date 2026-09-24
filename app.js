let cartCount = 0;

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-cart")) {
        cartCount++;
        document.getElementById("cartCount").textContent = cartCount;

        event.target.textContent = "✓ Agregado";
        event.target.classList.remove("btn-dark");
        event.target.classList.add("btn-success");
    }
});

document.getElementById("categoryFilter").addEventListener("change", function () {
    const category = this.value;

    document.querySelectorAll("#productList .product").forEach(product => {
        product.style.display =
            category === "todos" || product.dataset.category === category
                ? ""
                : "none";
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos!");
    this.reset();
});

const catalogImages = document.querySelectorAll(".manga-card img");
let currentImage = 0;

function changeHeroImage() {
    if (catalogImages.length === 0) return;

    document.documentElement.style.setProperty(
        "--hero-image",
        `url("${catalogImages[currentImage].src}")`
    );

    currentImage = (currentImage + 1) % catalogImages.length;
}

changeHeroImage();
setInterval(changeHeroImage, 4000);