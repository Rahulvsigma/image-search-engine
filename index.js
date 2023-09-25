


const api_key = "0iDU6E4clY07SdAO-LmG0G-GUfjiZYrjeuZPwe3X2rY";
const formE1 = document.querySelector("form");
const inputE1= document.querySelector("#search-input");
const searchResults = document.querySelector(".Search-results");
const showMore = document.querySelector("#show-more-button");

let inputdata = "";
let page = 1;

async function searchImages() {
    inputdata = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add("Search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchResults.appendChild(imagewrapper);
    });
    page++;
    if (page > 1) {
        showMore.style.display ="block";
    }
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", (event) => {
    event.preventDefault();
    searchImages();
});
