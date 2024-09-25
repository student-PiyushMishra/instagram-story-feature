let stories = document.querySelector(".stories");
let story = [
    {dp:"https://images.unsplash.com/photo-1607893466128-31b7c28727a9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1642440529514-9c987ee48fed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGFsfGVufDB8fDB8fHww",song:""},
    {dp:"https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww",song:""},
    {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",song:""},
    {dp:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_photo-1701196954983-d1c0544f9a87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5jaWVudCUyMGJ1aWxkaW5nc3xlbnwwfDF8MHx8fDA%3D",song:""},
    {dp:"https://images.unsplash.com/photo-1692971421325-70c061b25f31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5jaWVudCUyMGJ1aWxkaW5nc3xlbnwwfDF8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1664779938840-5d473758bbea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuY2llbnQlMjBidWlsZGluZ3N8ZW58MHwxfDB8fHww",song:""},
]

function showStories(story){
    let clutter = ''
    story.forEach((elem,index)=>{
        clutter += `<div class="story" id="${index}">
        <img src="${elem.dp}" class="img" id="${index}">
    </div>`
    })
    stories.innerHTML = clutter;
}

function storyOpen(array,parent){
    let story = document.querySelector(".story-img");
    let story_img = story.querySelector("img");
    parent.
    addEventListener("click",(event)=>{
        if(event.target == "DIV" || "IMG"){
            console.log("hello");
            story.style.display = 'block';
            story_img.setAttribute("src",array[event.target.id].story)
            setTimeout(() => {
                story.style.display = 'none';
            }, 4000);
        }
    })
}

storyOpen(story,stories)
showStories(story)