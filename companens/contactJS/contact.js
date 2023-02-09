import { data } from "./contactData.js";
const contactInfo = document.querySelector(".contact-info")
data.map((item) => {
  contactInfo.innerHTML += `
  <div class="tortta">
    <div class="laman" id="${item.id}">
    <div class="tortta-icon">
        <i>${item.i}</i>
    </div>
    <div class="tortta-text">
        <h3>${item.torttaText.h3}</h3>
        <p>${item.torttaText.p}</p>
    </div>
</div>
</div>  `;
});