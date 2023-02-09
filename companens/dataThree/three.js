import { data } from "./threeData.js";
const mailRu1 = document.querySelector('.mail-ru1');
data.map((item) => {
    mailRu1.innerHTML += `
   <div class="mail-uz2">
    <div class="kichkina">
        <p>${item.p}</p>
    </div>
    <div class="img-mail">
        <img src="${item.img}"
            alt="">
    </div>
    <div class="mail-text">
        <div class="mail-li">
            <p>${item.span}</p>
        </div>
        <div class="mail-li2">
            <h4>${item.h4}</h4>
        </div>
        <div class="ilmilol">
            <div class="mail-li3">
                <h3>${item.mail.p}</h3>
                <h3>${item.mail.parag} </h3>
            </div>
            <div class="mail-card">
                <div class="icon-mail">
                    <i>${item.mail.icon}</i>
                </div>
            </div>
        </div>
    </div>
</div> 
    `
})