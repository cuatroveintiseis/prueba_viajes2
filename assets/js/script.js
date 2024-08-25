const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
   

    $("#enviarMensaje").click(function () {
        alert("El mensaje fue enviado correctamente...");
    });
});



// MODAL

const termsLink = document.querySelector('.check__link');


const termsModal = document.querySelector('#staticBackdrop');


termsLink.addEventListener('click', (e) => {
 
  e.preventDefault();

 
  termsModal.classList.add('show');
  termsModal.style.display = 'block';
});
