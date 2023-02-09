import { data } from "./aboutData.js"
const sensetiyItem = document.querySelector('.sensetiy-item')
data.map((item) => {
    sensetiyItem.innerHTML += `
    <div class="our-sensa" id="${item.id}">
    <div class="padmin">
        <div class="padmin-img">
            <img src="${item.adminImage}"
                alt="">
        </div>
        <div class="padmin-text">
            <h3>${item.adminTExt.h3}</h3>
            <p>${item.adminTExt.p}</p>
        </div>
    </div>

    </div>
`
})
