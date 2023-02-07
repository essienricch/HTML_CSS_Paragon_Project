//import prompt from 'prompt';
console.log("Working")



alert("Hello User! ")

function signUpUser(){

    let username = prompt("Enter your Username: ");
    if (username === null) return ;
    while(!validateUserName(username)){
        username = prompt("Enter a valid Username: ")
    }


    let password = prompt("Enter your password: ")
    while (!validatePassword(password)){
        password = prompt("Please, enter a  valid password: ")
    }

    let confirmPassword = prompt("Confirm Password: ")
    while(confirmPassword !== password){
        confirmPassword = prompt("Enter Password to Confirm : ")
    }


    alert("You have successfully signed up...")
    alert("Username: ", username, "\n Password: ", password)
    console.log(username,  password);

}

signUpUser();



function validateUserName(name){
    if (name === null) return true;
    if(name.length < 10){
        return true;
    }return false;
}

function validatePassword(password){
    if (password === null) return false;
    if (password.length > 6){
        return true;
    }return false;
}

