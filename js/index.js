const form = document.querySelector("form")
const invulveld = document.querySelector("#invulveld")
const btn = document.querySelector(".is-info")
const lijst = document.querySelector(".columns")

form.onsubmit = function(e){
e.preventDefault();
getData(veld.value);
};

async function getData(str){
    btn.classList.add("is-loading");
    const response = await fetch(`https://randomuser.me/api/?first=${str}`
    );
    const data = await response.json();
    lijst.innerHTML = data.results
    .map(
    ({name, country, state, city, picture})=>`
    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <div class="card">
          <div class="card-image">
            <h2>${name}</h2>
            <h2>${country}</h2>
            <h2>${state}</h2>
            <h2>${city}</h2>
            <figure class="image is-4by3">
              <img src="${picture}" alt="${name}" />
            </figure>
          </div>
        </div>
      </div>
      `).join("");
      btn.classList.remove("is-loading");
      veld.value = "";
}