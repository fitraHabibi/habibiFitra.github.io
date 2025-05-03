document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { selectId: "size1", priceId: "price1" },
        { selectId: "size2", priceId: "price2" },
        { selectId: "size3", priceId: "price3" },
        { selectId: "size4", priceId: "price4" },
        { selectId: "size5", priceId: "price5" },
        { selectId: "size6", priceId: "price6" },
        { selectId: "size7", priceId: "price7" },
        { selectId: "size8", priceId: "price8" },
        { selectId: "size9", priceId: "price9" },
    ];

    products.forEach((product) => {
        const selectElement = document.getElementById(product.selectId);
        const priceElement = document.getElementById(product.priceId);

        selectElement.addEventListener("change", function () {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            priceElement.textContent = selectedOption.dataset.price;
        });
    });
});

// Add to cart
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartMessage = document.getElementById("cart-message");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            // menghindari default action
            event.preventDefault();
            // Tampilkan pesan
            cartMessage.style.display = "block";

            // Sembunyikan pesan setelah 3 detik
            setTimeout(() => {
                cartMessage.style.display = "none";
            }, 3000);
        });
    });
});

// Guides
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Contact
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        alert("Message Sent!");
        contactForm.reset(); // Clear the form fields
    });
});
