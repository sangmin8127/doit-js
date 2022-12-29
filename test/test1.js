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

console.log("------------------------------------------------------");

// 인자값으로 숫자가 들어왔을때 1부터 n까지 더하기.
function calcSum(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}

calcSum(10);


console.log("------------------------------------------------------");

//