// Compare sliders: click or drag across an image to move the divider and
// reveal more of one render or the other. Once a slider has keyboard focus,
// the arrow keys move it too.

let sliders = document.querySelectorAll(".compare")

sliders.forEach((slider) => {
    let isDragging = false

    // Moves the divider to a percentage (0-100) across the image
    let settingPosition = (percent) => {
        percent = Math.min(100, Math.max(0, percent))

        slider.style.setProperty("--position", percent + "%")
        slider.setAttribute("aria-valuenow", Math.round(percent))
    }

    // Turns the pointer's spot on screen into a percentage across the image
    let followingPointer = (event) => {
        let box = slider.getBoundingClientRect()

        settingPosition((event.clientX - box.left) / box.width * 100)
    }

    let startingDrag = (event) => {
        isDragging = true

        // Keep getting pointer moves even if the pointer leaves the image mid-drag
        slider.setPointerCapture(event.pointerId)
        followingPointer(event)
    }

    let dragging = (event) => {
        if(isDragging) {
            followingPointer(event)
        }
    }

    let endingDrag = () => {
        isDragging = false
    }

    // Left/right arrows nudge the divider; Home and End jump to each side
    let pressingKey = (event) => {
        let current = Number(slider.getAttribute("aria-valuenow"))

        if(event.key === "ArrowLeft") {
            settingPosition(current - 5)
        }
        else if(event.key === "ArrowRight") {
            settingPosition(current + 5)
        }
        else if(event.key === "Home") {
            settingPosition(0)
        }
        else if(event.key === "End") {
            settingPosition(100)
        }
        else {
            return
        }

        event.preventDefault()
    }

    slider.addEventListener("pointerdown", startingDrag)
    slider.addEventListener("pointermove", dragging)
    slider.addEventListener("pointerup", endingDrag)
    slider.addEventListener("pointercancel", endingDrag)
    slider.addEventListener("keydown", pressingKey)
})
