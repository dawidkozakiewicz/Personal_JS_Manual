  // my handbook
  
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
      document.getElementById("posts").innerHTML = output;
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

   init = async () => {
      await createPost({ title: "Post Three", body: "This is post three" })
      getPosts()
  }

  init()

// *******************************************************************************************

// fetch zwraca promise
  fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log(res)
      const data = await res.json()
      console.log(data)
  }

  fetchUsers()

