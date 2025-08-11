const initApp = () => {
    let activeTab = 0;
    document.querySelectorAll(".tab").forEach((tabTitle, i) => {
    tabTitle.addEventListener("click", () => {
        console.log(`user clicked tab ${i}`);
        if (activeTab!=i) {
            document.getElementById(`tabTitle${activeTab}`).classList.toggle("active");
            document.getElementById(`tabTitle${i}`).classList.toggle("active");
            document.getElementById(`tab${activeTab}`).classList.toggle("hidden");
            document.getElementById(`tab${i}`).classList.toggle("hidden");
            activeTab = i;
        }        
    });
});
}

document.addEventListener("DOMContentLoaded", initApp);
