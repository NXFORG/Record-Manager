collection = {
    whatDidYouThink: {
        title: "What Did You Think",
        artist: "Nothing But Thieves",
        genre: "Alternative Rock",
        releaseYear: 2018,
        value: 50.69,
        trackList: ["Forever & Ever More", "Gods", "You Know Me Too Well", "Take This Lonely Heart"]
    },
    seizeThePower: {
        title: "Seize the Power",
        artist: "Yonaka",
        genre: "Alternative Rock",
        releaseYear: 2021,
        value: 112,
        trackList: ["Ordinary, Seize The Power", "Get Out", "Raise Your Glass", "Clique", "Greedy", "Call Me A Saint", "Anthem"]
    },
    closer: {
        title: "Closer",
        artist: "Joy Division",
        genre: "Post Punk",
        releaseYear: 1980,
        value: 40,
        trackList: ["Atrocity Exhibition", "Isolation", "Passover", "Colony", "A Means To An End", "Heart And Soul", "Twenty Four Hours", "The Eternal", "Decades"]
    },
    brokenMachine: {
        title: "Broken Machine",
        artist: "Nothing But Thieves",
        genre: "Alternative Rock",
        releaseYear: 2017,
        value: 27.50,
        trackList: ["I Was Just A Kid", "Amsterdam", "Sorry", "Broken Machine", "Live Like Animals", "Soda", "I'm Not Made By Design", "Particles", "Get Better", "Hell, Yeah", "Afterlife"]
    },
    nothingButThieves: {
        title: "Nothing But Thieves",
        artist: "Nothing But Thieves",
        genre: "Alternative Rock",
        releaseYear: 2015,
        value: 23,
        trackList: ["Excuse Me	3:38", "Ban All The Music", "Wake Up Call", "Itch",	"If I Get High", "Graveyard Whistling", "Hostage", "Trip Switch", "Lover, Please Stay", "Drawing Pins", "Painkiller", "Tempt You (Evocatio)"]
    },
    vienna: {
        title: "Vienna",
        artist: "Ultravox",
        genre: "New Wave",
        releaseYear: 1980,
        value: 10,
        trackList: ["Astradyne", "New Europeans", "Private Lives", "Passing Strangers", "Sleepwalk", "Mr. X", "Western Promise", "Vienna", "All Stood Still"]
    },
    parallelLines: {
        title: "Parallel Lines",
        artist: "Blondie",
        genre: "Pop Rock",
        releaseYear: 1978,
        value: 10,
        trackList: ["Hanging on the Telephone", "One Way or Another", "Picture This", "Fade Away and Radiate", "Pretty Baby", "I Know but I Don’t Know", "11:59", "Will Anything Happen", "Sunday Girl", "Heart of Glass", "I'm Gonna Love You Too", "Just Go Away"]
    },
    elemental: {
        title: "Elemental",
        artist: "Pendulum",
        genre: "Drum n Bass",
        releaseYear: 2021,
        value: 20,
        trackList: ["Driver", "Nothing For Free", "Louder Than Words", "Come Alive"]
    }
}

let apiResults = [];

const displayResults = () => {
    console.log(apiResults)
    for(album of apiResults){
        let title = album.title;
        let id = album.id;
        let genre = album.genre;
        let year = album.releaseYear;
        let image = album.image;
        let barcode = album.barcode;
        //console.log(`Title works: ${album}`)
        //console.log(`Does this work: ${title}, ${id}, ${genre}, ${year}, ${image}, ${barcode}`);
        createListing(title, genre, year, image, barcode);
    } 
}

const createListing = (title, genre, year, image, barcode) => {
    console.log(`Year: ${year}, Genre: ${genre}, Barcode: ${barcode}`);
    let newFigure = document.createElement('figure');
    let newFigImg = document.createElement('img');
    let newFigCaption = document.createElement('figcaption');
    let modBtn = document.createElement('button');
    modBtn.textContent = "Details";
    modBtn.style.marginTop = "20px";
    newFigCaption.textContent = title;
    newFigImg.src = image || './src/vinyl.jpg';
    newFigure.appendChild(newFigImg); 
    newFigure.appendChild(newFigCaption); 
    newFigure.appendChild(modBtn);
    document.getElementById('resultsDisplay').appendChild(newFigure); 

    let modal = document.getElementById("albumInfo");
    let closeModal = document.getElementsByClassName("close")[0];

    modBtn.addEventListener('click', e => {
        modal.style.display = "block";
        document.getElementById('relYear').innerText = "Release year: " + year;
        document.getElementById('relGenre').innerText = "Genre(s): " + genre;
        document.getElementById('relBarcode').innerText = "Barcode(s): " + barcode;
    })

    closeModal.addEventListener('click', e => {
        modal.style.display = "none";
    })

    document.addEventListener('click', e => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
}



/* const albumManager = (albums) => {
	if (albums) {
		console.log('Your collection: ');
		console.log('==========================================');
		collectionFormat(albums).forEach(album => console.log(album));
		console.log('==========================================');
		const total = collectionValueCalculator(albums);
		console.log(`Your collection is worth: £${total}`);
		console.log('==========================================');
		console.log("Today's listening: " + suggestASong(albums));
	} else {
		console.log('No collection provided');
	}
}

const collectionFormat = albums => {
	let formattedCollection = [];
	for(album in albums){
		formattedCollection.push(albums[album].title + " - " + albums[album].artist);
	}
	return formattedCollection;
}

const collectionValueCalculator = albums => {
	let total = 0;
	for(album in albums){
		total += albums[album].value;
	}
	return total;
}

const suggestASong = albums => {
	let allTracks = [];
	for(album in albums){
		albums[album].trackList.forEach(track => allTracks.push({
			track: track, artist: albums[album].artist
		}));
	}
	return songShuffler(allTracks);
}

const songShuffler = tracks => {
	const index = Math.floor(Math.random() * tracks.length);
	return tracks[index].track + " - " + tracks[index].artist;
}
 */
//albumManager(collection);
