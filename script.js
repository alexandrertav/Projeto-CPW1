// Função para exibir o formulário de inscrição
function mostrarFormulario() {
    document.getElementById("formulario-inscricao").style.display = "block"; // Torna o formulário visível
}

// Função para fechar o formulário
function fecharFormulario() {
    document.getElementById("formulario-inscricao").style.display = "none"; // Torna o formulário invisível
}

//carregar menu e rodapé
fetch('menu.html')
    .then(response => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.text();
    })
    .then(data => {
        document.getElementById('menu').innerHTML = data;
    })
    .catch(error => console.error('Error loading menu:', error));
fetch('footer.html')
    .then(response => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Carousel functionality
    let currentSlide = 0; // Start with the first slide
    const slides = document.querySelectorAll('.carousel_img'); // Get all carousel images

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index); // Show the active slide, hide others
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide, loop back at the end
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide, loop back at the start
        showSlide(currentSlide);
    }

    // Show the first slide initially
    if (slides.length > 0) {
        showSlide(currentSlide);
    }