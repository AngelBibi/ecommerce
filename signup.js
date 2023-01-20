const formulario=document.getElementById('formulario');

const user2=document.getElementById('utilizador2');
const email=document.getElementById('email');
const password2=document.getElementById('password2');
const conpassword=document.getElementById('conpassword');

const user=document.getElementById('utilizador');
const password=document.getElementById('password');

const btn_con2 = document.getElementById("btn_con2");
const btn_con = document.getElementById("btn_con");

const mnguser = document.getElementById('mngErroUser')
const mngemail = document.getElementById('mngErroEmail')
const mngpassword = document.getElementById('mngErroPassword')


btn_con2.addEventListener("click", (e)=>{
    e.preventDefault();
    check_inputs();
});

btn_con.addEventListener("click", (e)=>{
    console.log('valor1')
    e.preventDefault();
    console.log('valor1')
    check_btn();
});


function check_btn(){
    console.log('valor12')
    const user=document.getElementById('utilizador');
    const password=document.getElementById('password');

    const userVal= user.value;
    const passwordVal= password.value;

    if (userVal=== ''){
        console.log('valor3')
        user.innerHTML=`
        <p>O utilizador não pode estar em branco</p>
        `
    }else if(passwordVal === '') {
		password.innerHTML=`
        <p>O utilizador não pode estar em branco</p>
        `
	} else {
        alert('O Log In foi realizado com sucesso')
		next_page()
	}
}

function next_page() {
    window.open('index.html');
}

function check_inputs(users, emails){
    const user2=document.getElementById('utilizador2');
    const email=document.getElementById('email');
    const password2=document.getElementById('password2');
    const conpassword=document.getElementById('conpassword');

    const mnguser = document.getElementById('mngErroUser')
    const mngemail = document.getElementById('mngErroEmail')
    const mngpassword = document.getElementById('mngErroPassword')
    const mngpass = document.getElementById('mngErroPass')


    const userVal= user2.value;
    const emailVal= email.value;
    const passwordVal= password2.value;
    const conpasswordVal= conpassword.value;

    mnguser.innerHTML=``
    mngemail.innerHTML=``
    mngpass.innerHTML=``
    mngpassword.innerHTML=``

    if (userVal=== ''){
        mnguser.innerHTML=`
        <p>O utilizador não pode estar em branco</p>
        `
    }else if(emailVal === '') {
        mngemail.innerHTML=`
        <p>Email não pode estar em branco</p>
        `

	} else if(passwordVal === '') {
		mngpass.innerHTML=`
        <p>Password não pode estar em branco</p>
        `
	} else if(conpasswordVal === '') {
		mngpassword.innerHTML=`
        <p>Este elemento não pode estar em branco</p>
        `
	} else if(passwordVal !== conpasswordVal) {
        mngpassword.innerHTML=`
        <p>As passwords não estão iguais</p>
        `
    }else{
		setSuccessFor(userVal, emailVal, passwordVal);
	}

}
function setSuccessFor() {
    const userVal= user2.value;
    const emailVal= email.value;
    const passwordVal= password2.value;

    let users=[];
    let emails = []
    let passwords=[];
    
	users.push(userVal)
    emails.push(emailVal)
    passwords.push(passwordVal)
    console.log(users)
    next_page()
}

