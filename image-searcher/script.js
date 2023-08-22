const input = document.querySelector(".input");
const form = document.querySelector(".form");
const searchResult = document.querySelector(".search-results");
const showMore = document.querySelector("#btn");

const api_key = "gNXTn2R4bTEnirYAYAAsR40zyYJSDypNO6FpskAhHns";

let inputData;
let page;

const searchImages = async () => {
  inputData = input.value.trim();
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api_key}`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = image.alt;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResult.appendChild(imageWrapper);
  });
  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMore.addEventListener("click", (e) => {
  searchImages();
});
