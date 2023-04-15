// Wait for the page to load before adding event listeners
window.addEventListener('load', function() {
    // Get the form element
    var form = document.getElementById('reservation-form');

    // Add an event listener for the form submit
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form data
        var formData = new FormData(form);

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set the HTTP method and URL
        xhr.open('POST', 'process.php');

        // Set the request headers
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // Set the onload handler
        xhr.onload = function() {
            // Check if the request was successful
            if (xhr.status === 200) {
                // Display a success message
                alert('Your reservation has been submitted!');
                // Reset the form
                form.reset();
            } else {
                // Display an error message
                alert('An error occurred while submitting your reservation.');
            }
        };

        // Set the onerror handler
        xhr.onerror = function() {
            // Display an error message
            alert('An error occurred while submitting your reservation.');
        };

        // Send the request with the form data
        xhr.send(formData);
    });
});
