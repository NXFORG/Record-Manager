const dotenv = require('dotenv').config();
const axios = require('axios');
const express = require('express');
const main = require('./index.js');

const app = express();
app.use(express.json());
const port = 3000;


//app.get("/", (req, res) => res.send("Welcome to Collection Manager"));

/* app.get("/", (req, res) => res.sendFile(process.cwd() + '/index.html'));

app.get("/database/search", async (req, res) => {
	try {
		const searchString = `${req.query.q}`;
        const response = await axios.get(`https://api.discogs.com/database/search?q=${searchString}&key=${process.env.API_KEY}&secret=${process.env.API_SECRET}`);
        	
		appendToObject(response.data.results);
	
		return res.json({
            success: true,
            output: response.data.results
        })
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		})
	}
})

let appendToObject = (apiOutput) => {
	for(album in apiOutput){
		let outputData = apiOutput[album]
		let outputTitle = outputData.title;
		let outputYear = outputData.year;
		let outputGenre = outputData.genre;
		let outputImage = outputData.thumb;
		let outputBarcode= outputData.barcode;
		let newAlbum = {[outputTitle] : {
			id: parseInt(album),
			title: outputTitle,
			genre: outputGenre,
			releaseYear: outputYear,
			image: outputImage,
			barcode: outputBarcode
		}}
		Object.assign(main.testCollection, newAlbum);
	}
	main.displayResults();
}

app.listen(port, () => console.log(`Collection manager listening on port ${port}!`)); */