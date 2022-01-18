//get starting values from the screen
//Controller Function
function getMessage() {
    let userMessage = document.getElementById("message").value;
    Swal.fire(
        'Button clicked!',
        userMessage,
        "success"
    );
    console.log(userMessage);
};