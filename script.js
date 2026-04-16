class JARVISInterface {
    constructor() {
        this.voiceButton = document.getElementById('voiceButton');
        this.voiceStatus = document.getElementById('voiceStatus');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.voiceButton.addEventListener('click', () => {

            this.updateVoiceButtonState('listening');
            this.updateVoiceStatus('Use o widget no canto para falar');

            setTimeout(() => {
                this.updateVoiceButtonState('idle');
                this.updateVoiceStatus('SISTEMA ATIVO');
            }, 2000);

        });
    }

    updateVoiceButtonState(state) {
        this.voiceButton.className = `voice-button ${state}`;
    }

    updateVoiceStatus(text) {
        const el = this.voiceStatus.querySelector('.status-text');
        el.textContent = text;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JARVISInterface();
});