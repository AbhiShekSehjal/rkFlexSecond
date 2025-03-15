let hamburger = document.getElementById("hamburger");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let sidebar = document.getElementById("sidebar");
let crossbtn = document.getElementById("crossbtn");

// for navbar
hamburger.addEventListener("click", () => {
    if (line2.style.opacity === "0") {
        line2.style.opacity = "1";
        line1.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg)";
        sidebar.style.right = "-300px"
    } else {
        line2.style.opacity = "0";
        line1.style.transform = "rotate(45deg)";
        line3.style.transform = "rotate(-45deg)";
        sidebar.style.right = "0"
    };
})

crossbtn.addEventListener("click", () => {
    line2.style.opacity = "1";
    line1.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";
    sidebar.style.right = "-300px"
})

window.addEventListener("scroll", () => {
    line2.style.opacity = "1";
    line1.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";
    sidebar.style.right = "-300px";
})

// our specials
import products from "./products.js";

function newProducts() {

    let specials = document.getElementById("specials");

    products.forEach(product => {
        const productCard = document.createElement("div");

        productCard.classList.add("product-card");
        productCard.innerHTML =
            `
            <img src="${product.image}" alt="${product.alter}">
            <h3>${product.heading}</h3>
            <p>${product.price}</p>
            <button class="btn">Add to cart</button>
            `;
        specials.appendChild(productCard);
    })
}

window.onload = newProducts;

// testimonials
import ourTestimonials from "./testimonials.js";

let index = 0;

let Testimonials = document.getElementById("Testimonials");
let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");

const newTestimonial = document.createElement("div");

newTestimonial.classList.add("testimonial");

function updateTestimonial() {
    newTestimonial.innerHTML = `
            <h3>${ourTestimonials[index].text}</h3>
            <p>${ourTestimonials[index].from}</p>
            `;
    Testimonials.appendChild(newTestimonial);
}

rightBtn.addEventListener("click", () => {
    index = (index + 1) % ourTestimonials.length;
    rightBtn.style.color = "red"
    setTimeout(() => {
        rightBtn.style.color = "rgb(70, 97, 176)";
        setTimeout(() => {
            rightBtn.style.color = "aliceblue"
        }, 200);
    }, 200)
    updateTestimonial();
})

leftBtn.addEventListener("click", () => {
    index = (index - 1 + ourTestimonials.length) % ourTestimonials.length;
    leftBtn.style.color = "red"
    setTimeout(() => {
        leftBtn.style.color = "rgb(70, 97, 176)";
        setTimeout(() => {
            leftBtn.style.color = "aliceblue"
        }, 200);
    }, 200)
    updateTestimonial();
})

updateTestimonial()