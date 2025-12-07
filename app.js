// Load saved message if exists
const savedMessage = localStorage.getItem("pipelineMessage");
const statusText = document.getElementById("statusText");

if (savedMessage) {
    statusText.textContent = savedMessage;
}

document.getElementById("checkPipelineBtn").addEventListener("click", () => {
    const msg = "Your CI/CD Pipeline is Active!";
    statusText.textContent = msg;

    // Save in local storage so it stays after refresh
    localStorage.setItem("pipelineMessage", msg);
});
