const form = document.getElementById('findArtist');

form.addEventListener('submit', e => {
    e.preventDefault();
    let query = document.getElementById('searchQuery');
    getDiscogs(query.value);
})

