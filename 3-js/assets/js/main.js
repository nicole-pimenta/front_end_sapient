/* 
/**
 * Abrir e fechar o menu com o clique no botão Menu
 */
document.querySelector("#menu-button").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("-active");
});

/**
 * Play do vídeo ao clicar na imagem de capa
 */
document.querySelector(".video").addEventListener("click", () => {
  document.querySelector("#video-cover").classList.toggle("-inactive");
});

/**
 *Sistema de sanfona para a lista
 */

document.querySelector(".item").addEventListener("click", () => {
  document.querySelector(".item").classList.toggle("-active");
});

console.log(document.querySelectorAll(".item"));
