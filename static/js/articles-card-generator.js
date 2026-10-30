const articles = [
    {
        title: "Le dipendenze tecnologiche",
        category: "Tecnologia & Informazione",
        description: "La tecnologia fa male?",
        image: "https://placeholder.com",
        altimage: "Placeholder",
        link: "../templates/article1.html"
    }
]

const container = document.getElementById('grid-articles')

articles.forEach(article => {
    // Create data structure
    const cardHTML = `
        <div class="article-card" onclick="window.location.replace('${article.link}')" tabindex="0">
            <div class="card-image">
                <img src="${article.image}" alt="${article.altimage}">
            </div>
            <div class="card-content">
                <span class="category">${article.category}</span>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            </div>
        </div>
       `;

    container.innerHTML += cardHTML;
});