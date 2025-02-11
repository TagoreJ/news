const apiKey = "6234c5d2d2db4e6d99fd237671d7bdf4";
const newsContainer = document.getElementById("news");

async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();

    newsContainer.innerHTML = ""; // Clear old news

    data.articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `
            <img src="${article.urlToImage || 'placeholder.jpg'}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Fetch news every 10 minutes
fetchNews();
setInterval(fetchNews, 600000);
