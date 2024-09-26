let stories = document.querySelector(".stories");
let story = [
    { dp: "https://images.unsplash.com/photo-1607893466128-31b7c28727a9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1642440529514-9c987ee48fed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGFsfGVufDB8fDB8fHww", song: "Tum Hi Ho - Arijit Singh", userid: "arpita_23", time: "5 hours ago" },
    { dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww", song: "Blinding Lights - The Weeknd", userid: "itz_samapti07", time: "11 hours ago" },
    { dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song: "Levitating - Dua Lipa", userid: "official.redox_granger", time: "44 min ago" },
    { dp: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D", story: "https://plus.unsplash.com/premium_photo-1701196954983-d1c0544f9a87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5jaWVudCUyMGJ1aWxkaW5nc3xlbnwwfDF8MHx8fDA%3D", song: "Senorita - Shawn Mendes & Camila Cabello", userid: "wrong.site_33", time: "22 hours ago" },
    { dp: "https://images.unsplash.com/photo-1692971421325-70c061b25f31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5jaWVudCUyMGJ1aWxkaW5nc3xlbnwwfDF8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1664779938840-5d473758bbea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuY2llbnQlMjBidWlsZGluZ3N8ZW58MHwxfDB8fHww", song: "Makhna - Yo Yo Honey Singh", userid: "mishra_code_bytes", time: "3 hours ago" },
]

function showStories(story) {
    let clutter = ''
    story.forEach((elem, index) => {
        clutter += `<div class="parent-story" style="overflow-x:hidden;min-width:fit-content;"><div class="story" id="${index}">
        <img src="${elem.dp}" class="img" id="${index}">
    </div><p>${elem.userid}</p></div>`
    })
    stories.innerHTML = clutter;
}

function storyRender(array) {
    let all = document.querySelector(".story-all");
    let clutter = ``
    array.forEach((elem, index) => {
        clutter += `<div class="story-img" id="${index}">
                        <div class="story-loader"></div>
                        <div class="dets" style="color:white;">
                            <div class="top">
                                <div class="right">
                                    <div class="dp" id="${index}"><img src="${elem.dp}" alt=""></div>
                                    <div class="id"><p>${elem.userid}</p></div>
                                </div>
                                <div class="time">${elem.time}</div>
                            </div>
                            <div class="song" style="width:60%;padding: 0 3vw;">
                                <i class="ri-music-2-fill"></i><marquee><p class="marquee">${elem.song}</p></marquee>
                            </div>
                        </div>
                        <img class="main-img" src="${elem.story}"/>
                        <div class="dets-btm">
                        <input placeholder="Add a comment..."/>
                        <i class="ri-heart-3-line" id="heart"></i>
                        </div>
                    </div>`
    })
    all.innerHTML = clutter;
}

function storyOpen() {
    stories.addEventListener("click", function (event) {
        let nodelist = document.querySelectorAll(".story-img")
        if (event.target == "DIV" || "IMG") {
            nodelist[event.target.id].style.display = 'block'
            let popup = document.querySelector(".popup")
            let heart = nodelist[event.target.id].querySelector("#heart")
            popup.textContent = "You are watching a story."
            popup.style.opacity = 1;
            setTimeout(() => {
                popup.style.opacity = 0;
            }, 1000)
            let flag = 0;
            heart.addEventListener('click', () => {
                if (flag == 0) {
                    heart.style.color = 'red'
                    heart.classList.remove("ri-heart-3-line")
                    heart.classList.add("ri-heart-3-fill")
                    flag++;
                    popup.textContent = "You liked a story."
                    popup.style.opacity = 1;
                    setTimeout(() => {
                        popup.style.opacity = 0;
                    }, 1300)
                }
                else {
                    heart.style.color = 'white'
                    heart.classList.remove("ri-heart-3-fill")
                    heart.classList.add("ri-heart-3-line")
                    flag--;
                    popup.textContent = "You unliked a story."
                    popup.style.opacity = 1;
                    setTimeout(() => {
                        popup.style.opacity = 0;
                    }, 1300)
                }
            })
            setTimeout(() => {
                nodelist[event.target.id].style.display = 'none'
            }, 6000);
        }
    })
}



storyOpen()
storyRender(story)
showStories(story)