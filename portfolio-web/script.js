/* ========================================
   TEMA CLARO/ESCURO
   ======================================== */

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Verificar tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
}

// Alternar tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
});

/* ========================================
   VALIDAÇÃO DE FORMULÁRIO
   ======================================== */

const contactForm = document.getElementById('contact-form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');

const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroMensagem = document.getElementById('erro-mensagem');

const modalSucesso = document.getElementById('modal-sucesso');
const modalClose = document.getElementById('modal-close');
const modalOkBtn = document.getElementById('modal-ok-btn');

// Validação de e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Limpar mensagens de erro
function limparErros() {
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
}

// Validar formulário ao enviar
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    limparErros();
    
    let temErro = false;

    // Validar nome
    if (nomeInput.value.trim() === '') {
        erroNome.textContent = 'Por favor, digite seu nome completo.';
        temErro = true;
    } else if (nomeInput.value.trim().length < 3) {
        erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        temErro = true;
    }

    // Validar e-mail
    if (emailInput.value.trim() === '') {
        erroEmail.textContent = 'Por favor, digite seu e-mail.';
        temErro = true;
    } else if (!validarEmail(emailInput.value.trim())) {
        erroEmail.textContent = 'Por favor, digite um e-mail válido.';
        temErro = true;
    }

    // Validar mensagem
    if (mensagemInput.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, digite uma mensagem.';
        temErro = true;
    } else if (mensagemInput.value.trim().length < 10) {
        erroMensagem.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
        temErro = true;
    }

    // Se não houver erro, exibir modal de sucesso
    if (!temErro) {
        mostrarModalSucesso();
        contactForm.reset();
    }
});

// Mostrar modal de sucesso
function mostrarModalSucesso() {
    modalSucesso.classList.add('show');
}

// Fechar modal
function fecharModal() {
    modalSucesso.classList.remove('show');
}

modalClose.addEventListener('click', fecharModal);
modalOkBtn.addEventListener('click', fecharModal);

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modalSucesso) {
        fecharModal();
    }
});

/* ========================================
   VALIDAÇÃO EM TEMPO REAL
   ======================================== */

// Nome - validação em tempo real
nomeInput.addEventListener('blur', () => {
    if (nomeInput.value.trim() === '') {
        erroNome.textContent = 'Por favor, digite seu nome completo.';
    } else if (nomeInput.value.trim().length < 3) {
        erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
    } else {
        erroNome.textContent = '';
    }
});

// E-mail - validação em tempo real
emailInput.addEventListener('blur', () => {
    if (emailInput.value.trim() === '') {
        erroEmail.textContent = 'Por favor, digite seu e-mail.';
    } else if (!validarEmail(emailInput.value.trim())) {
        erroEmail.textContent = 'Por favor, digite um e-mail válido.';
    } else {
        erroEmail.textContent = '';
    }
});

// Mensagem - validação em tempo real
mensagemInput.addEventListener('blur', () => {
    if (mensagemInput.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, digite uma mensagem.';
    } else if (mensagemInput.value.trim().length < 10) {
        erroMensagem.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
    } else {
        erroMensagem.textContent = '';
    }
});

/* ========================================
   ANIMAÇÃO DE SCROLL (OPCIONAL)
   ======================================== */

// Animar elementos ao entrar na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador aos cards
document.querySelectorAll('.card, .card-projeto').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

/* ========================================
   SUPORTE PARA NAVEGAÇÃO MOBILE
   ======================================== */

// Fechar menu ao clicar em um link (se houver menu mobile)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Aqui você pode adicionar lógica para fechar um menu mobile, se necessário
    });
});

/* ========================================
   LOG DE INICIALIZAÇÃO
   ======================================== */

console.log('%c📱 Portfólio Pessoal Carregado!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido por Henrique Pazini - 2026', 'color: #10b981; font-size: 12px;');
