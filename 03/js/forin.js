const gitBook = {
  title: "for-in",
  pubDate: new Date(),
  pages: 272,
  finished: true,
};

for (key in gitBook) {
  //document.write(`${key} : ${gitBook[key]}<br>`);
  // console.log("키 : ", [key]);
  // console.log("키값 : ", gitBook[key]);
  //console.log("갯수구하기 : ", gitBook[key].length);
  document.getElementById("forinee").innerHTML +=
    `<li class="font-size-1">` + gitBook[key] + `</li>`;
  console.log("for in 반복문의 키와 키값 : ", key, " : ", gitBook[key]);
}

console.log("------------------------------------------------------------");

const bolpen = {
  color: "black",
  size: "10cm",
  price: "1000",
  seller: "monami",
  finished: true,
};

for (key in bolpen) {
  console.log(key, bolpen[key]);
}

console.log("------------------------------------------------------------");

const students = [
  "학생A",
  "학생B",
  "학생C",
  "학생D",
  "학생E",
  "학생F",
  "학생G",
];
for (student of students) {
  console.log(student);
}

let stars = parseInt(prompt("별의개수 : "));
while (stars > 0) {
  //document.write("*");
  console.log("*");
  stars--;
}
