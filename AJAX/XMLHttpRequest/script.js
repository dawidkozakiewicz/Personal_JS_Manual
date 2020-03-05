document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getMessage").onclick = function() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    req.send();
    console.log(req)
    req.onload = function() {
      const json = req.responseText;
      document.getElementsByClassName("message")[0].innerHTML = json;
    };
  };
});



