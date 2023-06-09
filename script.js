// add event listeners for clear cart and checkout buttons
document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('checkout').addEventListener('click', checkout);
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

// function to clear the cart

function clearCart(){
    document.querySelector('.cart-items').innerHTML = '';
    document.getElementById('cart-total').textContent = '0';
}

//function to simulate the checkout process
function checkout(){
    let total = document.getElementById('cart-total').textContent;
    alert('Thank you for your purchase! Total: R' + total);
}

/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}