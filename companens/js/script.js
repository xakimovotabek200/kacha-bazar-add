import { data } from "./data.js";
const infoloat = document.querySelector(".info-loat");
data.map((item) => {
  infoloat.innerHTML += `
          <div class="info-card" id="${item.id}">
            <img src="${item.img}">
            <div class="text">
              <h3>${item.h3}</h3>
              <p>${item.p}</p>
              <p>${item.h1}</p>
              <p>${item.h2}</p>
            </div>
          </div>
        `;
});


const adven = document.getElementById('#adven');
console.log(adven);
// adven.addEventListener('click', () => {
//   console.log('salom');
// })