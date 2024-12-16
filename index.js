let all = [];
let all2 = [];
async function getGames(names) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '114220ee67mshaf9c8853beeaa07p13b422jsn9764428bd22c',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }

    };

    try {
       document.querySelector(".sk-chase1").classList.remove("d-none");
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${names}`, options);
        const result = await response.json();
        all = result;
        
        display1();
        document.querySelector(".sk-chase1").classList.add("d-none");
    } catch (error) {
      document.querySelector(".sk-chase1").classList.add("d-none");
        console.error(error);
    }

}
async function getGames2(number) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${number}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '114220ee67mshaf9c8853beeaa07p13b422jsn9764428bd22c',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
      document.querySelector(".loader1").classList.remove("d-none");
      
        const response = await fetch(url, options);
        const result = await response.json();
      all2 = result;
          display2();
        document.querySelector(".loader1").classList.add("d-none");
    } catch (error) {
      document.querySelector(".loader1").classList.add("d-none");
        console.error(error);
    }
}
function display1() {
    let cartona = "";
    for (let i = 0; i < all.length; i++) {
        cartona += `<div class="col card1" id="${all[i].id}">
              <div
                data-id="582"
                class="card h-100 bg-transparent"
                role="button"
              >
                <div class="card-body">
                  <figure class="position-relative">
                    <img
                      class="card-img-top object-fit-cover h-100"
                      src="${all[i].thumbnail}"
                    />
                  </figure>
                  <figcaption>
                    <div class="hstack justify-content-between">
                      <h3 class="h6 small">${all[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <p class="card-text small text-center opacity-50">
                    ${all[i].short_description.split(" ", 8)}
                    </p>
                  </figcaption>
                </div>
                <footer
                  class="card-footer small hstack justify-content-between"
                >
                  <span class="badge badge-color">  ${all[i].genre}</span>
                  <span class="badge badge-color">${all[i].platform}</span>
                </footer>
              </div>
            </div> `
    }

    document.getElementById("gameData").innerHTML = cartona;
}

let gameData = document.querySelector("#gameData");
gameData.addEventListener("click", function (e) {

    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");
    let getId = e.target.closest(".col")
    if (getId) {
        getGames2(getId.id);
        sec1.classList.add("d-none");
        sec2.classList.replace("d-none", "d-block");

    }
})
let btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", function () {
    sec1.classList.replace("d-none", "d-block");
    sec2.classList.replace("d-block", "d-none");
})

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav =>
            nav.classList.remove("active"));
        this.classList.add("active");
    });
});

getGames("mmorpg")
let play1 = document.getElementById("play1");
let play2 = document.getElementById("play2");
let play3 = document.getElementById("play3");
let play4 = document.getElementById("play4");
let play5 = document.getElementById("play5");
let play6 = document.getElementById("play6");

play1.addEventListener("click", function () {
    getGames("mmorpg");
})
play2.addEventListener("click", function () {
    getGames("shooter");
})
play3.addEventListener("click", function () {
    getGames("sailing");
})
play4.addEventListener("click", function () {
    getGames("permadeath");
})
play5.addEventListener("click", function () {
    getGames("superhero");
})
play6.addEventListener("click", function () {
    getGames("pixel");
})

function display2(){
    let cartona = "";
   cartona += `  <div class="col-md-4">
            <img src="${all2.thumbnail}" />
          </div>
          <div class="col-md-8">
            <h3>Title: ${all2.title}</h3>
            <p>
              Category:
              <span class="badge text-bg-info">${all2.genre}</span>
            </p>
            <p>
              Platform:
              <span class="badge text-bg-info">${all2.platform}</span>
            </p>
            <p>
              Status:
              <span class="badge text-bg-info">${all2.status}</span>
            </p>
            <p class="small">
            ${all2.description}
            </p>
            <a class="btn btn-outline-warning" target="_blank" href="${all2.game_url}">Show Game</a>
          </div>`;
          document.getElementById("detailsContent").innerHTML = cartona;
}