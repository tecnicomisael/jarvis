const button = document.getElementById('voiceButton');
const status = document.getElementById('status');

button.addEventListener('click', () => {

    status.innerText = "Ativando...";

    setTimeout(() => {
        status.innerText = "Fale com o JARVIS";
    }, 1000);

});