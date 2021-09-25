const manager = require("../index.js");

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

describe('albumManager', () => {
    it('should exist', () => {
        expect(manager.albumManager).toBeDefined();
    })
});

describe('collectionValueCalculator', () => {
    let calculator = manager.collectionValueCalculator;
    it('should exist', () => {
        expect(calculator).toBeDefined();
    })
})