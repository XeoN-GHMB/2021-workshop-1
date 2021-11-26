let lights = document.getElementsByClassName("light");

function changeLight(light){
    [...lights].map(light => (light.classList.remove("is-active")))
    light.classList.add("is-active")

    let activelight = document.getElementById("light")
    activelight.innerHTML = light.dataset.color
}


for(let light of lights){
    light.addEventListener("click",()=>{
        changeLight(light)
    })
}
