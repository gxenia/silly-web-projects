const initApp = () => {
    addClickEvent();
    loadFile("files/sonnet18.txt", "sonnet18");
}

const addClickEvent = () => {
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

const loadFile = ( fileName, where ) => {
    fetch(fileName)
    .then(response => response.text())
    .then(data => {
      const textContainer = document.getElementById(where);
      if (textContainer) {
        textContainer.textContent = data;
      }
    })
    .catch(error => console.error('Error loading the file:', error));
}

document.addEventListener("DOMContentLoaded", initApp);
