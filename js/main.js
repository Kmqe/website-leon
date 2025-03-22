const bar_icon = document.getElementById("bar_icon");
const list_links = document.getElementById("list_links");

bar_icon.addEventListener("click", () => {
  if (list_links.style.display == "none") {
    list_links.style.display = "block";
  } else {
    list_links.style.display = "none";
  }
});
