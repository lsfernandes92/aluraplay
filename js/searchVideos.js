import { searchVideos as getVideos } from "./api.js";
import { videosContainer, buildVideoLi } from "./showVideos.js";

const btSearch = document.querySelector(".pesquisar__botao");

async function searchVideos(event) {
  event.preventDefault();

  const searchInput = document.querySelector(".pesquisar__input").value;

  const videos = await getVideos(searchInput);

  videosContainer.innerHTML = "";

  videos.forEach(video => {
    videosContainer.appendChild(buildVideoLi(video));
  });
} 

btSearch.addEventListener("click", event => searchVideos(event));