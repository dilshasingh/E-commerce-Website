
    // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // const cartItemsContainer = document.getElementById('cart-items');
    // const totalPriceContainer = document.getElementById('total-price');

    // function createCartItemElement(item) {
    //     const cartItem = document.createElement('div');
    //     cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center');
        
    //     const imgElement = document.createElement('img');
    //     imgElement.src = item.image;
    //     imgElement.alt = item.title;
    //     imgElement.style.height = '200px';  // Adjust the height as needed
    //     imgElement.style.width = '150px';   // Adjust the height as needed
    //     imgElement.style.marginBottom = '20px';

    //     const textContainer = document.createElement('div');
    //     textContainer.textContent = `${item.title} - ₹${item.price}`;

    //     cartItem.appendChild(imgElement);
    //     cartItem.appendChild(textContainer);

    //     return cartItem;
    // }

    // function renderCartItems() {
       
    //     cartItemsContainer.innerHTML = '';
    //     cartItems.forEach(item => {
    //         const cartItemElement = createCartItemElement(item);
    //         cartItemsContainer.appendChild(cartItemElement);
    //     });
    // }

    // function renderTotalPrice() {
    //     const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    //     totalPriceContainer.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
    // }

    // renderCartItems();
    // renderTotalPrice();


    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    
    function createCartItemElement(item, index) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'd-flex', 'align-items-center', 'my-3', 'p-3', 'border', 'rounded', 'shadow-sm');
    
        const imgElement = document.createElement('img');
        imgElement.src = item.image;
        imgElement.alt = item.title;
        imgElement.classList.add('cart-item-image', 'mr-3');
        
        const textContainer = document.createElement('div');
        textContainer.classList.add('cart-item-text');
        textContainer.textContent = `${item.title} - ₹${item.price}`;
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'ml-3');
        deleteButton.addEventListener('click', () => {
            deleteCartItem(index);
        });
    
        cartItem.appendChild(imgElement);
        cartItem.appendChild(textContainer);
        cartItem.appendChild(deleteButton);
    
        return cartItem;
    }
    
    function deleteCartItem(index) {
        cartItems.splice(index, 1); // Remove item from cart array
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
        renderCartItems(); // Re-render cart items
        renderTotalPrice(); // Re-render total price
    }
    
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItemElement = createCartItemElement(item, index);
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    function renderTotalPrice() {
        const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
        totalPriceContainer.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    }
    
    renderCartItems();
    renderTotalPrice();
    