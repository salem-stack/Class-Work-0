function signUp() {
    confirm('You want submit this form?');
    // let user = {}
    // user.name
}

function submitInfo() {
    this.signUp();    
    var name = '';
    var email = '';
    var message = '';

    name = document.getElementById('name').value;

    email = document.getElementById('email').value;

    password = document.getElementById('message').value;

    if(name == '' || email == '' || message == '') {
        alert('Input Missing Field');
    } else { 
        alert('Form has been submitted');
    }
}