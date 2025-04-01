// Coloca a tela em branco, enquanto ela estiver carregando
const corpoSite = document.body
window.onload = () => {
  corpoSite.classList.remove('carregando');
};

// Mantem as propriedades css do link que for clicado, no cabecalho.
// Evita, assim, o efeito de fundo branco momentaneo, quando um link é clicado
const itensCabecalho = document.querySelectorAll(".itens-com-texto-cabecalho a:not(.submenu-onde-reciclar a), .conteudo-cabecalho");
itensCabecalho.forEach(link => {
  link.addEventListener("click", function(event) {
    this.style.color = '#74991C';
    this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    this.style.backgroundColor = '#367743'
  });
});
