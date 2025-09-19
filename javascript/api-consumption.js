import { GUTENBERG_PROJECT_BASE_URL } from "./api.js";

fetch(`${GUTENBERG_PROJECT_BASE_URL}/books/`)
.then(response => response.json())
.then((data) => {
    
    const article = document.createElement("article");
    const header = document.createElement("header");
    const h2 = document.createElement("h2");
    const authors = document.createElement("p");
    const image = document.createElement("img");
    const div = document.createElement("div");
    const description = document.createElement("p");
    const readLink = document.createElement("a");

    authors.className = "authors";
    description.className = "description";

    header.append(h2, authors);

    div.append(description, readLink);

    article.append(header, image, div);
    
    const fragment = document.createDocumentFragment();
    
    data.results.forEach(book => {

        let newArticle = article.cloneNode(true);
        newArticle.querySelector("h2").innerText = book.title;
        newArticle.querySelector(".authors").innerText = book.authors.map(author =>
            author.name).join(", ");
        newArticle.querySelector("img").setAttribute("src", `${book.formats["image/jpeg"]}`);
        newArticle.querySelector("img").setAttribute("alt", `${book.title}`);
        newArticle.querySelector(".description").innerText = book.summaries[0];
        newArticle.querySelector("a").setAttribute("href", `${book.formats["text/html"]}`);
        newArticle.querySelector("a").setAttribute("target", "_blank");
        newArticle.querySelector("a").innerText = "Read online";
        fragment.appendChild(newArticle);

   });

   document.querySelector("main").appendChild(fragment);
    
})
.catch(error => console.log(error));

