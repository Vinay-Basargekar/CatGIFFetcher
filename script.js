const img = document.querySelector("img");
const refreshCatButton = document.getElementById("refresh-cat");
const searchInput = document.getElementById("search");
const searchForm = document.getElementById("search-form");

function searchKeyword(key) {
	return `https://api.giphy.com/v1/gifs/translate?api_key=S5EGL1M9ldSTgbHnbrbulejnTjRJm0TI&s=${key}`;
}

function fetchCatGif(url) {
	fetch(url, { mode: "cors" })
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		})
		.catch((error) => {
			console.error("Error fetching the cat GIF:", error);
			alert("Failed to fetch the cat GIF. Please try again later.");
		});
}

refreshCatButton.addEventListener("click", () => {
	const url = searchKeyword("cats");
	fetchCatGif(url);
});

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const keyword = searchInput.value.trim();
	if (keyword) {
		const url = searchKeyword(keyword);
		fetchCatGif(url);
	} else {
		alert("Please enter a search term.");
	}
});

const initialUrl = searchKeyword("cats");
fetchCatGif(initialUrl);
