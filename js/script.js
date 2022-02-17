const container = document.querySelector(".container");

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

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].artist_names);
    // console.log(data[i].full_title);

    container.innerHTML += `
    <div>
      <h2>Song: ${data[i].full_title}</h2>
      <h3>Artist: ${data[i].artist_names}</h3>
      <img src="${data[i].header_image_url}" alt="">
    </div>`;
  }

  console.log(data);
}

callApi();
