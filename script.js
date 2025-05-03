const prompts = [
    "A cat wearing sunglasses",
    "A futuristic city at night",
    "A dragon flying over mountains",
    "A robot holding a flower",
    "A fantasy castle on a hill"
];

function randomPrompt() {
    const promptInput = document.getElementById("prompt-input");
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    promptInput.value = random;
}

function generateImage() {
    const prompt = document.getElementById("prompt-input").value;
    const img = document.getElementById("output-image");
    if (prompt.trim() === "") {
        alert("Please enter a prompt.");
        return;
    }
    // Gambar dummy dulu, nanti bisa sambung ke API
    img.src = "https://placekitten.com/400/300"; 
    img.alt = prompt;
}