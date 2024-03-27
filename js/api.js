const apiEndpoint = "http://localhost:3000/videos"

async function  getVideos() {
    const request = await fetch(apiEndpoint);
    const videos = await request.json();
  
    return videos;
}


export const api = {
  getVideos
}