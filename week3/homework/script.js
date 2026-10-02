let thisPage = document.getElementById("docBody")

let focusPic = document.getElementById("focusPic")
let thumb1 = document.getElementById("thumb1")
let thumb2 = document.getElementById("thumb2")
let thumb3 = document.getElementById("thumb3")
let thumb4 = document.getElementById("thumb4")


let showingImage = (event) => {
    console.log(event.target)

    focusPic.src = event.target.src
    focusPic.alt = event.target.alt

    console.log(focusPic)
}

thumb1.addEventListener("click", showingImage)
thumb2.addEventListener("click", showingImage)
thumb3.addEventListener("click", showingImage)
thumb4.addEventListener("click", showingImage)
