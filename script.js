
const subjects = ["cat", "robot", "girl", "dragon"];
const styles = ["realistic", "pixel art", "cyberpunk", "surreal"];
const backgrounds = ["in space", "underwater", "in a forest", "on Mars"];

function randomPrompt() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById("prompt-input").value = `${subject}, ${style}, ${background}`;
}

function generateImage() {
    const prompt = document.getElementById("prompt-input").value;
    const img = document.getElementById("output-image");
    const dummySources = [
        "https://placekitten.com/400/300",
        "https://placebear.com/400/300",
        "https://loremflickr.com/400/300/art",
        "https://picsum.photos/400/300"
    ];
    img.src = dummySources[Math.floor(Math.random() * dummySources.length)];
    img.alt = prompt;
}

function savePromptToURL() {
    const prompt = document.getElementById("prompt-input").value;
    const encoded = encodeURIComponent(prompt);
    const url = `${window.location.origin}${window.location.pathname}?prompt=${encoded}`;
    navigator.clipboard.writeText(url).then(() => alert("Prompt URL copied!"));
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const prompt = params.get("prompt");
    if (prompt) {
        document.getElementById("prompt-input").value = decodeURIComponent(prompt);
        generateImage();
}
}
