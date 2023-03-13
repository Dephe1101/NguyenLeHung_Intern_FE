// * Truncate
window.addEventListener("load", function () {
    truncateCardTitle();
    truncateCardTitle__viewing();
})

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 65);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "  " + "...";
    } else {
        return str;
    }
}

function truncateCardTitle__viewing() {
    var cardList = document.getElementsByClassName("viewing__card-title");
    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 55);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

// * Sidebar
var toggleBtn = document.querySelector('.side__bar__btn');
var sidebar = document.querySelector('.side__bar');
var switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('is__opened');
})

switchBtn.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('darkMode');
});