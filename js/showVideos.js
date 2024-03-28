import { getVideos } from "./api.js";

const videosContainer = document.querySelector(".videos__container");

function buildVideoLi(video) {
  const li = document.createElement("li");
  li.classList.add = "videos__item";
  li.innerHTML = `
    <iframe width="100%" height="72%" src="${video.url}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div class="descricao-video">
      <img src="./img/logo.png" alt="logo canal alura">
      <h3>${video.titulo}</h3>
      <p>${video.descricao}</p>
    </div>
  `
  
  return li;
}

async function listVideos() {
  const videos = await getVideos();

  videos.forEach(video => {
    videosContainer.appendChild(buildVideoLi(video));
  });
}

listVideos();