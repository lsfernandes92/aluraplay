const apiEndpoint = "http://localhost:3000/videos";

async function getVideos() {
  const request = await fetch(apiEndpoint);
  const videos = await request.json();

  return videos;
}

async function postVideo(payload) {
  const request = await fetch(
    apiEndpoint,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        {
          titulo: payload.title,
          descricao: `${payload.description} mil visualizações`,
          url: payload.url,
          imagem: payload.image
        }
      )
    }
  );
  const response = await request.json();
  
  return response;
}

async function searchVideos(searchInput) {
  const request = await fetch(`http://localhost:3000/videos?q=${searchInput}`);
  const response = await request.json();

  return response;
}

export { getVideos, postVideo, searchVideos }