// Get buttons
let sumtotal = document.querySelector('.sumtotal');
let plusBtns = document.querySelectorAll('.btnPlus');
let minusBtns = document.querySelectorAll('.btnMoins');
let deleteBtns = document.querySelectorAll('.btn-sup');
let totalPriceInput = document.querySelector('.prix-total');
let priceElements = document.querySelectorAll('.prix');
let heartIcons = document.querySelectorAll('.fa-heart');
let total = document.querySelector('.total');
let qty = document.querySelectorAll('.quantite');
let cart = document.querySelector('.cart');
let articles = document.querySelectorAll('.article');

// Function to calculate total price
function calculateTotal() {
    let totalPrice = 0; 
    for (let i = 0; i < articles.length; i++) {
        let itemprice = parseInt(price[i].innerHTML);
        let itemqty = parseInt(qty[i].value);
        totalPrice += itemprice * itemqty;
        total[i].innerHTML = totalPrice;
        totalPrice += itemTotal;
    }
    sumtotal.value = totalPrice
}

//Plus button
for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener('click', function() {
        qty[i].value ++;
        calculateTotal();
    });
}

//Minus button
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener('click', function() {
        if (qty[i].value > 1) {
            qty[i].value --;
            calculateTotal();
        }
    });
}
//Delete button
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function() {
        articles[i].remove();
        calculateTotal();
    });
}
//Heart icon toggle
heartIcons.forEach((icon) => {
    icon.addEventListener('click', function() {
        icon.classList.toggle('fa-solid');

    });
});

// Initial total calculation
calculateTotal();

// Add event listener to recalculate total when quantity changes manually
qty.forEach((input, index) => {
    input.addEventListener('change', function() {
        if (input.value < 1) {
            input.value = 1; // Prevent quantity from being less than 1
        }
        calculateTotal();
    });
});