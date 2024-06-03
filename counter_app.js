let count = 0
const countText = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

btns.forEach((currentButton) => {
    currentButton.addEventListener("click", (e)=> {
        const classes = e.currentTarget.classList
        if(classes.contains('increase')) {
            count += 1
        } else if (classes.contains('decrease')) {
            count --
        } else count = 0

        countText.textContent = count

    })
    
})