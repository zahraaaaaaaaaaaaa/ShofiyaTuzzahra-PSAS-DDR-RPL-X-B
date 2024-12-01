let cart = [];
function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice
    };

    cart.push(item);

    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length; 
}

const addCartButtons = document.querySelectorAll('button.AddCart');

addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cardBody = button.closest('.card-body');
        const itemName = cardBody.querySelector('h3').innerText;
        const itemPrice = cardBody.querySelector('h6').innerText.split(' ')[0];

        addToCart(itemName, itemPrice);
    });
});