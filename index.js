let hamburger = document.getElementById("hamburger");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let sidebar = document.getElementById("sidebar");
let crossbtn = document.getElementById("crossbtn");

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


const products = [
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/drawing.jpg", alter: "drawingWallper", heading: "4st wall", price: "4000 rs" },
    { id: 1, image: "images/golden.jpg", alter: "goldenwallper", heading: "2st wall", price: "3800 rs" },
    { id: 1, image: "images/green.jpg", alter: "greenWallper", heading: "3st wall", price: "6800 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/drawing.jpg", alter: "drawingWallper", heading: "4st wall", price: "4000 rs" },
    { id: 1, image: "images/golden.jpg", alter: "goldenwallper", heading: "2st wall", price: "3800 rs" },
    { id: 1, image: "images/green.jpg", alter: "greenWallper", heading: "3st wall", price: "6800 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/drawing.jpg", alter: "drawingWallper", heading: "4st wall", price: "4000 rs" },
    { id: 1, image: "images/golden.jpg", alter: "goldenwallper", heading: "2st wall", price: "3800 rs" },
    { id: 1, image: "images/green.jpg", alter: "greenWallper", heading: "3st wall", price: "6800 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
    { id: 1, image: "images/drawing.jpg", alter: "drawingWallper", heading: "4st wall", price: "4000 rs" },
    { id: 1, image: "images/golden.jpg", alter: "goldenwallper", heading: "2st wall", price: "3800 rs" },
    { id: 1, image: "images/green.jpg", alter: "greenWallper", heading: "3st wall", price: "6800 rs" },
    { id: 1, image: "images/black.jpg", alter: "blackWallper", heading: "1st wall", price: "3000 rs" },
    { id: 1, image: "images/blue.jpg", alter: "bluewallper", heading: "2st wall", price: "3500 rs" },
    { id: 1, image: "images/dining.webp", alter: "diningWallper", heading: "3st wall", price: "6000 rs" },
]

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