const gitBook = {
  title: "for-in",
  pubDate: new Date(),
  pages: 272,
  finished: true,
};

for (key in gitBook) {
  //document.write(`${key} : ${gitBook[key]}<br>`);
  console.log(gitBook[key]);
  document.getElementById("forinee").innerHTML += `<li>` + gitBook[key] + `</li>`
}
