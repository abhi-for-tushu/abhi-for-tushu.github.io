// Wait until page fully loads
window.onload = function () {

const music = document.getElementById("bgMusic");

// Function to change pages
window.nextPage = function (n) {
document.querySelectorAll(".page").forEach(page => {
page.classList.remove("active");
});

document.getElementById("page" + n).classList.add("active");

// Play music safely (browser autoplay fix)
if (music) {
music.play().catch(() => {});
}

};

// Quiz submit function
window.submitQuiz = function () {
const nameInput = document.getElementById("TUSHITA");
const loveInput = document.getElementById("love");

const name = nameInput.value.trim();
const love = loveInput.value;

if (name === "" || love === "") {
alert("Please complete the quiz 😘");
return;
}

// Condition logic
if (love === "Forever 💞") {
alert("I love you too " + name + " 💕");
nextPage(3);
}
else if (love === "Yes ❤️") {
alert("Okay!!! but This is not working, Please try again"+ "😜");
}
else if (love === "Obviously 😍") {
alert("Okay!!! but still This is not working, Please try again"+ "😜");
}

};

};
