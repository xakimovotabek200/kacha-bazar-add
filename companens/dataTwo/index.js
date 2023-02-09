import { data } from "./datas.js"

const mailRu = document.querySelector('.mail-ru')
data.map((item) => {
    mailRu.innerHTML += `
    <div class="mail-uz">
    <div class="img-mail">
        <img src="${item.img}"
            alt="">
    </div>
    <div class="mail-text">
        <div class="mail-li">
            <p>${item.p}</p>
        </div>
        <div class="mail-li2">
            <h4>${item.h4}</h4>
        </div>
        <div class="ilmilol">
            <div class="mail-li3">
                <h3>${item.h3}</h3>
            </div>
            <div class="mail-card">
                <div class="icon-mail">
                    <i id="adven">${item.icon}</i>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})
