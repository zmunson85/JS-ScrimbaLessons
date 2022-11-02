let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

const increment = () => {
    count += 1
    countEl.textContent = count
}
const decrement = () => {
    if (count == 0) {
        document.getElementById("decrement-btn").disable = true;
        count.style.color = "grey"
    }
    else if (count > 0) {
        count -= 1
        countEl.textContent = count
    }

}


const save = () => {
    if (count > 0) {
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }
}

const reset = () => {
    window.location.reload()
}

