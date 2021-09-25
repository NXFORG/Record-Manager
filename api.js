//const server = require('./server');

    const getDiscogs = async(artist) => {
      try {
          let response =  await fetch(`https://api.discogs.com/database/search?q=${artist}`);
          let jsonResponse = await response.json();
          //console.log(jsonResponse);
          //return jsonResponse;
          appendToObject(jsonResponse.results);
          //console.log(jsonResponse.results);
        } catch(error) {
          alert("Error: " + error.message);
          console.error("There was an error handling your request: " + error.message);
        }
      }

      let appendToObject = (apiOutput) => {
        for(album in apiOutput){
          let outputData = apiOutput[album]
          let outputTitle = outputData.title;
          let outputYear = outputData.year;
          let outputGenre = outputData.genre;
          let outputImage = outputData.thumb;
          let outputBarcode= outputData.barcode;
          let newAlbum = {
            id: parseInt(album),
            title: outputTitle,
            genre: outputGenre,
            releaseYear: outputYear,
            image: outputImage,
            barcode: outputBarcode
          }
          apiResults.push(newAlbum);
          }
          displayResults();
        }
        
    
