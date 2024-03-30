const apiEndpoint = "http://localhost:3000/videos";

async function getVideos() {
  const request = await fetch(apiEndpoint);

  checkError(request);

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

  checkError(request);

  const response = await request.json();
  
  return response;
}

async function searchVideos(searchInput) {
  const request = await fetch(apiEndpoint + `?q=${searchInput}`);

  checkError(request);

  const response = await request.json();

  return response;
}

function checkError(request) {
  if (!request.ok) {
    throw new Error(request.statusText);
  }
}

export { getVideos, postVideo, searchVideos }