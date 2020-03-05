document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("getMessage").onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const objWithTodos = JSON.stringify(data);
        document.getElementById("message").innerHTML = objWithTodos;
      });
  };
});
