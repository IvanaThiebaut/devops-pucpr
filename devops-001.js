// Valida se o e-mail tem um formato básico
function validarEmail(email) {
    if (!email || !email.includes('@') || email.length < 5) {
        return false;
    }
    return true;
}

// Valida se a mensagem tem um tamanho mínimo
function validarMensagem(mensagem) {
    return mensagem && mensagem.length >= 10;
}

document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const feedbackMessage = document.getElementById('feedback-message');
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (validarEmail(emailInput.value)) {
                feedbackMessage.textContent = `Obrigado! O e-mail ${emailInput.value} foi cadastrado com sucesso.`;
                feedbackMessage.style.color = 'green';
                emailInput.value = '';
            } else {
                feedbackMessage.textContent = 'Por favor, insira um e-mail válido.';
                feedbackMessage.style.color = 'red';
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const contactFeedback = document.getElementById('contact-feedback');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nome = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const mensagem = document.getElementById('contact-message').value;

            const isEmailValid = validarEmail(email);
            const isMessageValid = validarMensagem(mensagem);

            if (isEmailValid && isMessageValid && nome) {
                contactFeedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
                contactFeedback.style.color = 'green';
                contactForm.reset();
            } else {
                contactFeedback.textContent = 'Erro: Verifique os campos. O e-mail deve ser válido e a mensagem deve ter no mínimo 10 caracteres.';
                contactFeedback.style.color = 'red';
            }
        });
    }
});

// Exporta as funções para que possam ser testadas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarEmail, validarMensagem };
}