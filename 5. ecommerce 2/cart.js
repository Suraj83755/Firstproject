window.onload = function () {
    try {
        // Retrieve the cart from localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var cartDetailsContainer = document.getElementById('cartDetails');

        // Check if the cart is empty
        if (cart.length === 0) {
            cartDetailsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            // Display the products in the cart
            var cartHTML = '<ul>';
            cart.forEach(function (product) {
                // Verify the correctness of the image path in the src attribute
                cartHTML += '<li>' +
                    '<div class="d-flex flex-row"> <img class="rounded" src="' + product.image + '" alt="' + product.name + '" width="50" height="50"></div>' +
                    '<div class="d-flex flex-row align-items-center"><span class="d-block">' + product.name +
                    '</span> |  ' + product.price +
                    '</li>';
            });
            cartHTML += '</ul>';
            cartDetailsContainer.innerHTML = cartHTML;
        }
    } catch (error) {
        // Log any errors to the console
        console.error('Error in cart.js:', error);
        // Optionally, display an error message to the user
        cartDetailsContainer.innerHTML = '<p>An error occurred while loading your cart.</p>';
    }
};

refreshCartDisplay();

function refreshCartDisplay() {
    var cartDetailsContainer = document.getElementById('cartDetails');
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display the products in the cart
    var cartHTML = '<ul>';
    cart.forEach(function (product) {
        cartHTML += '<li>' +
                    '<div class="d-flex flex-row"> <img class="rounded" src="' + product.image + '" alt="' + product.name + '" width="50" height="50"></div>' +
                    '<div class="d-flex flex-row align-items-center"><span class="d-block">' + product.name +
                    '</span> |  ' + product.price +
                    '</li>';
    });
    cartHTML += '</ul>';

    cartDetailsContainer.innerHTML = cartHTML;
}

// Event listener for the Refresh Cart button
document.getElementById('refreshCartBtn').addEventListener('click', function() {
    // Clear the cart in localStorage
    localStorage.removeItem('cart');

    // Refresh the cart display
    refreshCartDisplay();

    // Optionally, you can provide feedback to the user (e.g., display a message, update UI)
    alert('Cart has been refreshed!');
});

// Initialize the cart display on page load
refreshCartDisplay();
