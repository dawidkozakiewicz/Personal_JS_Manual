document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getMessage").onclick = function() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    req.send();
    req.onload = function() {
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach((val) => {
        const keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
