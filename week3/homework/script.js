let thisPage = document.getElementById("docBody")

let focusPic = document.getElementById("focusPic")
let thumb1 = document.getElementById("thumb1")
let thumb2 = document.getElementById("thumb2")
let thumb3 = document.getElementById("thumb3")
let thumb4 = document.getElementById("thumb4")

let thumbRow = document.getElementById("thumbnails")
let prevBtn = document.getElementById("prevBtn")
let nextBtn = document.getElementById("nextBtn")


let showingImage = (event) => {
    console.log(event.target)

    focusPic.src = event.target.src
    focusPic.alt = event.target.alt

    // Move the outline: clear it from every thumbnail, then add it to the clicked one
    thumb1.parentElement.classList.remove("selected")
    thumb2.parentElement.classList.remove("selected")
    thumb3.parentElement.classList.remove("selected")
    thumb4.parentElement.classList.remove("selected")

    event.target.parentElement.classList.add("selected")

    console.log(focusPic)
}

// One thumbnail (100px) plus the gap (16px)
let scrollingLeft = () => {
    thumbRow.scrollBy({ left: -116, behavior: "smooth" })
}

let scrollingRight = () => {
    thumbRow.scrollBy({ left: 116, behavior: "smooth" })
}

// Only show an arrow when there is more of the row to see in that direction
let updatingArrows = () => {
    let maxScroll = thumbRow.scrollWidth - thumbRow.clientWidth

    if(thumbRow.scrollLeft > 0) {
        prevBtn.style.display = ""
    }
    else {
        prevBtn.style.display = "none"
    }

    if(thumbRow.scrollLeft < maxScroll - 1) {
        nextBtn.style.display = ""
    }
    else {
        nextBtn.style.display = "none"
    }
}

thumb1.addEventListener("click", showingImage)
thumb2.addEventListener("click", showingImage)
thumb3.addEventListener("click", showingImage)
thumb4.addEventListener("click", showingImage)

prevBtn.addEventListener("click", scrollingLeft)
nextBtn.addEventListener("click", scrollingRight)
thumbRow.addEventListener("scroll", updatingArrows)
window.addEventListener("resize", updatingArrows)

updatingArrows()
