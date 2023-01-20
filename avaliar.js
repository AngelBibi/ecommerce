const btn = document.getElementById('btnAvaliar');

btn.addEventListener("click", (e)=>{
    const star = document.getElementById('avaliacao').value;
    console.log(star)
    if(star>0 && star<6){
        console.log(star)
        alert('A sua avaliação foi submetida.\nObrigado por usar o Biju!!!')
    }else{
        alert('O numero que foi inserido não é valido.')
    }
});
