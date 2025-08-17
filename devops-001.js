document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    const feedbackMessage = document.getElementById('feedback-message');

    newsletterForm.addEventListener('submit', (event) => {
       
        event.preventDefault(); 

        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput.value) {
            feedbackMessage.textContent = `Obrigado! O e-mail ${emailInput.value} foi cadastrado com sucesso.`;
            feedbackMessage.style.color = '#d1e7dd';
            
            emailInput.value = ''; 
        } else {
            feedbackMessage.textContent = 'Por favor, insira um e-mail válido.';
            feedbackMessage.style.color = '#f8d7da'; 
        }
    });
});