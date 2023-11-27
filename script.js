let arr = [
    {
        dp:"/images/pk.jpg",
        story:"/images/pk.jpg"
    },
    {
        dp:"https://w0.peakpx.com/wallpaper/697/243/HD-wallpaper-virat-kohli-wali-king-kohli-in-sunglasses-virat-kohli-in-sunglasses-king-kohli-cricketer.jpg",
        story:"https://igimages.gumlet.io/tamil/home/rashmikamandanna23122020.jpg"
    },
    {
        dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://w0.peakpx.com/wallpaper/697/243/HD-wallpaper-virat-kohli-wali-king-kohli-in-sunglasses-virat-kohli-in-sunglasses-king-kohli-cricketer.jpg"
    }
];

let clutter = ""
let storiyan = document.querySelector("#storiyan")

arr.forEach(function(elem,idx){

    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000);
});
