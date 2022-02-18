const container = document.querySelector(".container");
const body = document.querySelector("body")

async function callApi() {
  const respons = await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "7a735c65b0msh4b4917a539d36dap135f69jsna87e32d3342f",
      },
    }
  );

  const json = await respons.json();
  const response = json.response;

  const data = json.response.songs;

  container.innerHTML= "";


  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].artist_names);
    // console.log(data[i].full_title);

    container.innerHTML += ` 
    <a href="" class="song-item">
      <img src="${data[i].header_image_url}" alt="">
      <h2>Song: ${data[i].full_title}</h2>
      <h3>Artist: ${data[i].artist_names}</h3>
    </a>`;
  }
  body.innerHTML + `<body class="body"</body>`

  console.log(data);
}

callApi();
