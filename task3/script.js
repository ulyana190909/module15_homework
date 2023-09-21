document.addEventListener('DOMContentLoaded', function() {
    const wsUri = "wss://echo-ws-service.herokuapp.com";

    const btnSend = document.getElementById('btn-send');
    const btnLoc = document.getElementById('btn-loc');
    const output = document.getElementById('output');
    let input = document.getElementById('chat-input');

    let websoket;

    websoket = new WebSocket(wsUri);

    websoket.onmessage = function(evt) {
        writeToScreen('<span class="chat-resp">Сервер: ' + evt.data +'</span>');
    }

    function writeToScreen(message) {
        let pre = document.createElement('p');
        pre.innerHTML = message;
        output.appendChild(pre);
    }
    
    btnSend.addEventListener('click', () => {
        const message = input.value;
        writeToScreen('<span class="chat-user">Вы: ' + message +'</span>');
        websoket.send(message);
    })

    const errorLocation = () => {
        writeToScreen('<span class="chat-resp"> Невозможно получить ваше месторасположение </span>')
    }

    const successLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        writeToScreen(`<a href='${link}' target='_blank'>Ссылка на вашу геолокацию</a>`)
    }

    btnLoc.addEventListener('click', () => {
        if (!navigator.geolocation) {
            writeToScreen('<span class="chat-resp"> Geolocation не поддерживается вашим браузером </span>')
        } else {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation)
        }
    })
    
})