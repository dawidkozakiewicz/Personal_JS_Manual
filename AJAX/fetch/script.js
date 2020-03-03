document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getMessage").onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(data => {
        document.getElementById("message").innerHTML = JSON.stringify(data);
      });
  };
});
