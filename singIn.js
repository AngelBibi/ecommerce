const formulario=document.getElementById('formulario');

const user=document.getElementById('utilizador');
const password=document.getElementById('password');

const btn_con = document.getElementById("btn_con");

const mnguser = document.getElementById('mngErroUser')
const mngpassword = document.getElementById('mngErroPassword')


btn_con.addEventListener("click", (e)=>{
    e.preventDefault();
    check_btn();
});


function check_btn(){
    const user=document.getElementById('utilizador');
    const password=document.getElementById('password');

    const userVal= user.value;
    const passwordVal= password.value;

    const mnguser = document.getElementById('mngErroUser')
    const mngpassword = document.getElementById('mngErroPassword')

    mnguser.innerHTML=``
    mngpassword.innerHTML=``

    if (userVal=== ''){
        mnguser.innerHTML=`
        <p>O utilizador não pode estar em branco</p>
        `
    }else if(passwordVal === '') {
		mngpassword.innerHTML=`
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
