console.log('js started');
var emailId = '';
var password = '';

function login(){

    emailId = document.getElementById('email').value;
    password = document.getElementById('pswd').value;

    if( emailId =='akhil@gmail.com' && password == '12345'){

        document.getElementById('result').innerHTML = 'Successfully LogedIn';
        document.getElementById('result').style.color='green';
        console.log('Successfully LogedIn');
        window.location.href='Mahabubnagar.html';


    }
    else{
        console.log('Invalid email/password');
        document.getElementById('result').style.color='red';
        document.getElementById('result').innerHTML = 'Invalid email/password';

    }
    return false;
}


console.log(' js end')