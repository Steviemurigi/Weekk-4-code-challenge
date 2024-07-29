const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const description = document.querySelector("section#movieDetails p");
          const runtime = document.querySelector("section#movieDetails p1");
          const showtime = document.querySelector("section#movieDetails p2")
  
          title.innerText = data.title;
          description.innerText = data.description;
          runtime.innerText = data.runtime;
          showtime.innerText = data.showtime;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);