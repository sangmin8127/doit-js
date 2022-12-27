const gitBook = {
  title: "forinTEST",
  pubDate: new Date(),
  page: 272,
  finished: true,
};

console.log(gitBook);

for (key in gitBook) {
  console.log("키값 : ", key);
}

for (key in gitBook) {
  console.log("밸류값 : ", gitBook[key]);
}
