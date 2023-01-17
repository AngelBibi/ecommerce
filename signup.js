const formulario=document.getElementById('formulario');

const user2=document.getElementById('utilizador2');
const email=document.getElementById('email');
const password2=document.getElementById('password2');
const conpassword=document.getElementById('conpassword');

const user=document.getElementById('utilizador');
const password=document.getElementById('password');

const btn_con2 = document.getElementById("btn_con2");
const btn_con = document.getElementById("btn_con");

let users=[];
let emails = []
let passwords=[];
let userlog = 

btn_con2.addEventListener("click", (e)=>{
    e.preventDefault();
    check_inputs();
});

btn_con.addEventListener("click", (e)=>{
    e.preventDefault();
    check_btn();
});


function check_btn(){
    const userVal= user.value;
    const passwordVal= password.value;

    if (userVal=== ''){
        alert("O utilizador não pode estar em branco");
    }else if( users.includes(userVal)==false) {
		alert ("O nome de utilizador não esta valido");
    }else if(passwordVal === '') {
		alert("A palavrapasse não pode estar em branco");
	}else if( passwords.includes(passwordVal)==false) {
		alert ("Palavra-passe incorreta");
    } else {
        alert('O Log In foi realizado com sucesso')
		next_page()
	}
}

function next_page() {
    window.open('index.html');
}

function check_inputs(users, emails){
    const userVal= user2.value;
    const emailVal= email.value;
    const passwordVal= password2.value;
    const conpasswordVal= conpassword.value;

    if (userVal=== ''){
        alert("O utilizador não pode estar em branco");
    }else if(users.includes(userVal)!=false){
        alert('Este nome de utilizador já esta a ser usado')
    }else if(emailVal === '') {
		alert("Email não pode estar em branco");
	} else if(emails.includes(emailVal)!=false){
		alert('Este email ja esta a ser usado por outro utilizador');
	} else if(passwordVal === '') {
		alert("Password não pode estar em branco");
	} else if(conpasswordVal === '') {
		alert ("Confirmação da password não pode estar em branco");
	} else if(passwordVal !== conpasswordVal) {
		alert ("As passwords não estão iguais");
    }else{
		setSuccessFor(userVal, emailVal, passwordVal);
	}

}
function setSuccessFor(userVal, emailVal, passwordVal, users, emails, passwords) {
	users.push(userVal)
    emails.push(emailVal)
    passwords.push(passwordVal)
    next_page()
}
