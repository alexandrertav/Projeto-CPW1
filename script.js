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