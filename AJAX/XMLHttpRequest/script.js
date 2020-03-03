document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getMessage").onclick = function() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    req.send();
    req.onload = function() {
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(
        json
      );
    };
  };
});



