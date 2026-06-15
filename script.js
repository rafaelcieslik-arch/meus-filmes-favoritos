const movies = [
    {
        title: "Harry Potter e a Pedra Filosofal - Trailer Oficial",
        description: "Assista ao trailer do primeiro filme da saga Harry Potter.",
        iframeUrl: "https://www.youtube.com/embed/fX6m8T-y690",
        channel: "Warner Bros. Pictures",
        views: "15 mi de visualizações",
        date: "há 2 anos"
    },
    {
        title: "Harry Potter e a Câmara Secreta - Trailer",
        description: "O segundo ano de Harry em Hogwarts.",
        iframeUrl: "https://www.youtube.com/embed/nUf_U-L373A",
        channel: "Warner Bros. Pictures",
        views: "8 mi de visualizações",
        date: "há 3 anos"
    },
    {
        title: "Harry Potter e o Prisioneiro de Azkaban - Trailer",
        description: "O terceiro filme da franquia.",
        iframeUrl: "https://www.youtube.com/embed/lAxgztbYDbs",
        channel: "Warner Bros. Pictures",
        views: "12 mi de visualizações",
        date: "há 4 anos"
    },
    {
        title: "Harry Potter e o Cálice de Fogo - Trailer",
        description: "O Torneio Tribruxo começa.",
        iframeUrl: "https://www.youtube.com/embed/3EGojp4Hh6I",
        channel: "Warner Bros. Pictures",
        views: "10 mi de visualizações",
        date: "há 5 anos"
    }
];

function renderMovies() {
    const videoGrid = document.getElementById('videoGrid');
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        card.innerHTML = `
            <div class="thumbnail-container">
                <iframe 
                    src="${movie.iframeUrl}" 
                    title="${movie.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <div class="video-details">
                    <h3>${movie.title}</h3>
                    <p>${movie.channel}</p>
                    <p>${movie.views} • ${movie.date}</p>
                </div>
            </div>
        `;
        
        videoGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderMovies);
