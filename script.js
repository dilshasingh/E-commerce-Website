// Add a check for the elements before using them
const cartItemsContainer = document.getElementById('cart-items');
const buyNowButton = document.getElementById('buy-now');
const cartCount = document.getElementById('cart-count');

// Initialize cart from localStorage or empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateCartDisplay() {
    // Ensure cartItemsContainer and buyNowButton exist before manipulating them
    if (!cartItemsContainer || !buyNowButton) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = 'No items in cart';
        buyNowButton.style.display = 'none'; // Hide the "Buy Now" button if cart is empty
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'cart-item');

            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = item.title;
            imgElement.classList.add('cart-item-image');

            const textContainer = document.createElement('div');
            textContainer.classList.add('cart-item-text');
            textContainer.textContent = `${item.title} - ₹${item.price}`;

            cartItem.appendChild(imgElement);
            cartItem.appendChild(textContainer);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteButton.textContent = 'X'; // Or use an icon here
            deleteButton.addEventListener('click', () => {
                removeItemFromCart(index);
            });

            cartItem.appendChild(deleteButton);
            cartItemsContainer.appendChild(cartItem);
        });
        buyNowButton.style.display = 'block'; // Show the "Buy Now" button if cart has items
    }
    cartCount.textContent = cart.length;
}

// Remove an item from the cart
function removeItemFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to add items to cart
function addToCart(title, price, image) {
    const item = { title, price, image };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Get all add-to-cart buttons and attach event listeners
const addToCartButtons = document.querySelectorAll('.add-to-cart-func');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const price = button.getAttribute('data-price');
        const image = button.getAttribute('data-image');
        addToCart(title, price, image);
    });
});

// Call this when the page loads to populate the cart
document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
});
