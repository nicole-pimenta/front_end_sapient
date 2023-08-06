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

/**
 *Carregamento de conteúdo ajax pela api da Wikipedia
 */

const url =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein";

// fetch(url, {
//   mode: "no-cors",
//   credentials: "include",
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log("Authorization failed : " + error.message));

async function getData() {
  const response = await fetch(url, {
    mode: "no-cors",
    credentials: "include",
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
}
getData();

/**
 *Abrir modal com a foto e fazer função no botão de fechar
 */

document.querySelector("#button-modal").addEventListener("click", () => {
  document.querySelector(".modal-wiki").classList.add("modal-wiki-active");
});

document.querySelector("#close-modal").addEventListener("click", () => {
  document.querySelector(".modal-wiki").classList.remove("modal-wiki-active");
});
