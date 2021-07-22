const input = document.querySelector("input");
const search = document.querySelector("button");

search.onclick = () => {
  let url = "https://www.google.com/search?q=" + input.value;
  window.open(url, "_self");
};


//code for trigged button on pressing enter key
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search.click();
  }
});
