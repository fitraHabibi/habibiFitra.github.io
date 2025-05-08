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

document.querySelectorAll('.navbar .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.navbar .nav-link').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Handle navbar active state on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar .nav-link');

    let currentSection = '';

    if (pageYOffset === 0) {
        currentSection = 'home';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// bagian sertifikat
document.querySelectorAll('#about .img-thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src;
        modal.style.display = 'flex';
    });
});

document.getElementById('imageModal').addEventListener('click', function() {
    this.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const sections = {
    floral: document.getElementById("floral"),
    woody: document.getElementById("woody"),
    citrus: document.getElementById("citrus"),
    products: document.getElementById("products"),
    // guides: document.getElementById("guides"),
  };

  const productSection = document.getElementById("products");
  const cards = productSection.querySelectorAll("[data-category]"); // ⬅️ hanya ambil card dari produk

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Aktifkan tombol
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Tampilkan atau sembunyikan section
      if (filter === "all") {
        for (let key in sections) {
          sections[key].classList.remove("d-none");
        }
      } else {
        for (let key in sections) {
          if (key === filter || key === "products") {
            sections[key].classList.remove("d-none");
          } else {
            sections[key].classList.add("d-none");
          }
        }
      }

      // Filter hanya card di dalam section produk
      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all") {
          card.classList.remove("d-none", "filtered-card");
          card.classList.add("col-md-4");
        } else {
          if (category === filter) {
            card.classList.remove("d-none");
            card.classList.add("filtered-card");
            card.classList.add("col-md-4");
          } else {
            card.classList.add("d-none");
            card.classList.remove("filtered-card");
            card.classList.add("col-md-4");
          }
        }
      });
    });
  });
});
