import { api } from "./api.js";

const form = document.querySelector("[data-form]");

async function sendVideo(event) {
  event.preventDefault();

  const url = document.querySelector("[data-url]").value;
  const title = document.querySelector("[data-title]").value;
  const image = document.querySelector("[data-image]").value;
  const description = Math.floor(Math.random() * 10).toString();

  const newVideo = {
    url: url,
    title: title,
    image: image,
    description: description
  };

  await api.postVideo(newVideo);

  window.location.href = "../pages/envio-concluido.html"
}

form.addEventListener("submit", event => sendVideo(event));