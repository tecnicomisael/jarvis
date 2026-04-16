// JARVIS FINAL FUNCIONAL

class JARVISInterface {
    constructor() {
        this.voiceButton = document.getElementById('voiceButton');
        this.voiceStatus = document.getElementById('voiceStatus');
        this.chatMessages = document.getElementById('chatMessages');

        this.autoStartEnabled = false;

        this.setup();
    }

    setup() {
        this.setupButton();
        this.enableAutoStart();
        this.addSystemMessage('[JARVIS] SISTEMA ONLINE');
    }

    setupButton() {
        this.voiceButton.addEventListener('click', () => {
            this.addSystemMessage('[INFO] Use o microfone do painel ElevenLabs');
        });
    }

    enableAutoStart() {
        const activate = () => {
            if (this.autoStartEnabled) return;

            const widget = document.querySelector('elevenlabs-convai');

            if (widget) {
                this.addSystemMessage('[JARVIS] VOZ ATIVADA');
                this.updateStatus('PRONTO PARA OUVIR');

                setTimeout(() => {
                    try {
                        widget.click();
                    } catch (e) {}
                }, 500);
            }

            this.autoStartEnabled = true;

            document.removeEventListener('click', activate);
            document.removeEventListener('keydown', activate);
        };

        document.addEventListener('click', activate);
        document.addEventListener('keydown', activate);
    }

    updateStatus(text) {
        const el = this.voiceStatus.querySelector('.status-text');
        if (el) el.textContent = text;
    }

    addSystemMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message system-message';
        msg.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
        this.chatMessages.appendChild(msg);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.jarvis = new JARVISInterface();
});