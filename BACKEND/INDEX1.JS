const Abrir_PopupLogin =document.querySelector('#Abrir_PopupLogin');
const LoginPopup =document.querySelector('#LoginPopup');
const main=document.querySelector('#main')
Abrir_PopupLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    LoginPopup.style.display = 'block';
   
});
window.addEventListener('click', (event) => {
    if (event.target === LoginPopup) {
        LoginPopup.style.display = 'none';
    }
});