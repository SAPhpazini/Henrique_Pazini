/* ==========================================================================
   LÓGICA JAVASCRIPT: VALIDAÇÃO, ENVIO SIMULADO E ALTERNÂNCIA DE TEMA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    });

    // ----------------------------------------------------------------------
    // 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');

    // Elementos do Modal de Sucesso
    const modalSucesso = document.getElementById('modal-sucesso');
    const modalClose = document.getElementById('modal-close');
    const modalOkBtn = document.getElementById('modal-ok-btn');

    // Expressão regular para validar formato de e-mail (usuario@dominio.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', (e) => {
        // Previne o envio padrão do formulário (recarregar página)
        e.preventDefault();

        let isValid = true;

        // Limpa mensagens de erro anteriores
        erroNome.textContent = '';
        erroEmail.textContent = '';
        erroMensagem.textContent = '';

        // Validação do campo Nome
        if (nomeInput.value.trim() === '') {
            erroNome.textContent = 'Por favor, preencha o seu nome completo.';
            isValid = false;
        }

        // Validação do campo E-mail
        if (emailInput.value.trim() === '') {
            erroEmail.textContent = 'Por favor, preencha o seu endereço de e-mail.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            erroEmail.textContent = 'Insira um e-mail com formato válido (ex: nome@dominio.com).';
            isValid = false;
        }

        // Validação da Mensagem
        if (mensagemInput.value.trim() === '') {
            erroMensagem.textContent = 'Por favor, digite a sua mensagem antes de enviar.';
            isValid = false;
        }

        // ------------------------------------------------------------------
        // 3. SIMULAÇÃO DO ENVIO (SE VÁLIDO)
        // ------------------------------------------------------------------
        if (isValid) {
            // Exibe a janela modal de sucesso
            modalSucesso.style.display = 'flex';

            // Limpa os campos do formulário
            contactForm.reset();
        }
    });

    // Funções para fechar a janela modal
    const fecharModal = () => {
        modalSucesso.style.display = 'none';
    };

    modalClose.addEventListener('click', fecharModal);
    modalOkBtn.addEventListener('click', fecharModal);

    // Fecha o modal ao clicar fora da caixa de diálogo
    window.addEventListener('click', (e) => {
        if (e.target === modalSucesso) {
            fecharModal();
        }
    });
});