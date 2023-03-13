
const VALUES = [
    { id: "scissors", value: "✌🏼" },
    { id: "rock", value: "🤜🏼" },
    { id: "paper", value: "🤚🏼" }
]

let i = 0;
const handleChange = () => {
    let computer = document.querySelector("#computer")
    computer.textContent = VALUES[i].value
    computer.dataset.id = VALUES[i].id
    if (i === VALUES.length - 1) {
        i = 0;
    } else {
        i++;
    }
}

let interval = setInterval(handleChange, 100)


const compare = (valuePlayer, valueComputer) => {
    let indexPlayer = VALUES.findIndex(item => item.id == valuePlayer)
    let indexComputer = VALUES.findIndex(item => item.id == valueComputer)
    let check = indexPlayer - indexComputer;
    if (check == 1 || check == -2) {
        return 1;
    } else if (check == 0) {
        return 0;
    } else {
        return -1;
    }
}

let playerItem = document.querySelectorAll(".user")
playerItem.forEach(item => {
    item.addEventListener("click", event => {
        clearInterval(interval)//dừng interval lại
        let valuePlayer = event.target.id;
        let valueComputer = computer.dataset.id;
        let result = compare(valuePlayer, valueComputer)
        playerItem.forEach(_item => {
            _item.classList.remove("actived")
            _item.style.pointerEvents = "none"
        });
        event.target.classList.add("actived")

        const alertDiv = document.createElement("div")
        alertDiv.classList.add("alert")
        let msg = "";
        if (result == 1) {
            msg = "Winner"
            alertDiv.classList.add("alert-success")
        } else if (result == 0) {
            msg = "Try Again"
            alertDiv.classList.add("alert-warning")
        } else {
            msg = "Lose"
            alertDiv.classList.add("alert-dark")
        }
        alertDiv.textContent = msg;
        document.querySelector(".notifications").appendChild(alertDiv)
        document.querySelector("#play-again").classList.remove("d-none")
    })
});


document.querySelector(".btn-play-again").addEventListener("click", event => {
    interval = setInterval(handleChange, 100)
    playerItem.forEach(_item => {
        _item.classList.remove("actived")
        _item.style.pointerEvents = ""
    });
    document.querySelector(".notifications").innerHTML = ""
    document.querySelector("#play-again").classList.remove("d-none")
})

