const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      if (typeof post === "object") {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(err => console.log(err));

// *******************************************************************************************

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);
console.log(promise1)
Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);

// *******************************************************************************************

const loadData = function(name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => resolve(xhr.response));
    xhr.addEventListener("error", () => reject(xhr.statusText));
    xhr.open(
      "GET",
      `https://restcountries.eu/rest/v2/name/${name}?fullText=true`,
      true
    );
    xhr.send();
  });
};

loadData("poland")
  .then(response => {
    console.log(response);
  })
  .catch(statusText => {
    console.log(statusText);
  });
