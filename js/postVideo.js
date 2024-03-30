import { postVideo } from "./api.js";

const form = document.querySelector("[data-form]");
const formContainer = document.querySelector(".container__formulario");

async function sendVideo(event) {
  event.preventDefault();

  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const image = document.querySelector("[data-image]").value;
  const description = Math.floor(Math.random() * 10).toString();

  const payload = {
    url: url,
    title: title,
    image: image,
    description: description
  };

  try {
    await postVideo(payload);
  
    window.location.href = "../pages/envio-concluido.html"
  } catch (error) {
    const divError = document.createElement("div");

    divError.innerHTML = `
      <h2 class="mensagem__titulo">
        Something went wrong on trying to add the video. 
        ${error}
      </h2>
    `

    formContainer.innerHTML = ''
    formContainer.appendChild(divError);
  }
}

form.addEventListener("submit", event => sendVideo(event));