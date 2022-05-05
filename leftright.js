var state = 1;

// Left is 0, Right is 1
var left_rights = [0, 0, 1];

console.log(state);
for (let s of left_rights) {
  n = state * 2 + s;
  console.log(state + "-->" + n);
  state = n;

  htmlPage = state + ".html";
    console.log(htmlPage);
  

}