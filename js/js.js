let products = document.getElementsByClassName('product');

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', productDescription);
}

function productDescription(event) {
    let productName = event.target;
    window.location = 'product.html?productName=' + productName.alt;
}

let logoButton = document.getElementById('logoButton');
logoButton.addEventListener('click', goHome);

function goHome(event) {
    window.location = 'index.html';
}

let logInButton = document.getElementById('logInButton');
logInButton.addEventListener('click', goToLogIn);

function goToLogIn(event) {
    window.location = 'login.html';
}

let buttonTop = document.getElementById('buttonTop');

// When the user scrolls down 800px from the top of the document,we will show the button
window.onscroll = function() {
    if (document.documentElement.scrollTop > 800) {
        buttonTop.classList.add('show');
    }
    else {
        buttonTop.classList.remove('show');
    }
};

buttonTop.addEventListener("click", scrollToTop);

function scrollToTop(event) {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let headerNav = document.getElementsByClassName('header-nav');
headerNav[0].addEventListener('click', openNav);

function openNav(event) {
    var x = document.getElementById("header-nav-list");
    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
