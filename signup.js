function mensagem_formulario(frm_ele, mensagem){
    const mng=frm_ele.querySelector("frm_mng");
    mng.textContent= mensagem;
    mng.classList.remove("frm_mng_sucesso", "frm_mng_erro");
    mng.classList.add('frm_mng_$(type)');
}

document.addEventListener("DOMContentLoaded",()=>{
    const logfrm=document.querySelector("#login");
    const criarcontafrm=document.querySelector("#Criarconta");
    document.querySelector("#criar_conta").addEventListener("click", e=>{
        e.preventDefault();
        logfrm.classList.add("frm_escondido");
        criarcontafrm.classList.remove("frm_escondido");
    });
    document.querySelector("#link_entrar").addEventListener("click", e=>{
        e.preventDefault();
        logfrm.classList.remove("frm_escondido");
        criarcontafrm.classList.add("frm_escondido");
    });

});

const formulario=document.getElementById('formulario');
const user_input=document.getElementById('utilizador_2');
const email=document.getElementById('e-mail');
const password_input=document.getElementById('password_2');
const con_password=document.getElementById('conpassword');
const user=document.getElementById('utilizador_1');
const password=document.getElementById('password_1');
var btn = document.getElementById("button_2");
document.getElementById("button").addEventListener("click", next_page);

btn.addEventListener("submit", (e)=>{
    e.preventDefault();
    check_inputs();
});
document.getElementById("button").addEventListener("click", check_btn);

function check_btn(){
    const userValue= user.value.trim();
    const passwordValue= password.value.trim();
    const user_inputValue= user_input.value.trim();
    const password_inputValue= password_input.value.trim();

    if (userValue=== ''){
        alert("O utilizador não pode estar em branco");
    }else if( userValue!== user_inputValue) {
		alert ("O nome de utilizador não esta valido");
    }else{
        setSucessfor(user);
    }
    if(passwordValue === '') {
		alert("A palavrapasse não pode estar em branco");
	}else if( passwordValue!== password_inputValue) {
		alert ("Palavra-passe incorreta");
    } else {
		setSuccessFor(password);
	}
    
}

function next_page() {
    window.open('index.html');
}

function check_inputs(){
    const user_inputValue= user_input.value.trim();
    const emailValue= email.value.trim();
    const password_inputValue= password_input.value.trim();
    const con_passwordValue= con_password.value.trim();

    if (user_inputValue=== ''){
        alert("O utilizador não pode estar em branco");
    }else{
        setSucessfor(user_input);
    }
    if(emailValue === '') {
		alert("Email não pode estar em branco");
	} else {
		setSuccessFor(email);
	}
	
	if(password_inputValue === '') {
		alert("Password não pode estar em branco");
	} else {
		setSuccessFor(password);
	}
	
	if(con_passwordValue === '') {
		alert ("Confirmação da password não pode estar em branco");
	} else if(password_inputValue !== con_passwordValue) {
		alert ("As passwords não estão iguais");
    }else{
		setSuccessFor(con_password);
	}
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'frm_input_user success';
}