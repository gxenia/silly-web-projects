const initApp = () => {
    document.querySelectorAll(".question").forEach((question, i) => {
    question.addEventListener("click", () => {
        console.log("user clicked");
        document.getElementById("answer"+i).classList.toggle("hidden");
        question.classList.toggle("open"); // for rotating icon
    });
});
}

document.addEventListener("DOMContentLoaded", initApp);
