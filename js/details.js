async function callApii() {
  const respons = await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs/6374199",
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
  console.log(data);
}

callApii();
