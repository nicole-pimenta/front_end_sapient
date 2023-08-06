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

document.querySelector(".accordion").addEventListener("click", (e) => {
  const ItemList = document.querySelectorAll(".item");

  if (e.target.className === "title") {
    const index = Number(e.target.innerText.split(" ")[1]);
    ItemList[index - 1].classList.toggle("-active");
  }
});
