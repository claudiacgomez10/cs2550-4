document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("theme-toggle")) return;

const themeButton = document.createElement("button");
themeButton.id = "theme-toggle";
themeButton.textContent = "Toggle Theme";

themeButton.style.position = "fixed";
themeButton.style.bottom = "20px";
themeButton.style.right = "20px";
themeButton.style.padding = "10px 16px";
themeButton.style.backgroundColor = "#b3000c";
themeButton.style.color = "#ffffff";
themeButton.style.border = "none";
themeButton.style.borderRadius = "8px";
themeButton.style.cursor = "pointer";
themeButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
themeButton.style.zIndex = "9999";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    let themeLink = document.getElementById("dynamic-theme");

    if(themeLink) {
        themeLink.remove();
    } else {
        themeLink = document.createElement("link");
        themeLink.id = "dynamic-theme";
        themeLink.rel = "stylesheet";
        themeLink.href = "css/theme.css";
        document.head.appendChild(themeLink);
    }
});
});