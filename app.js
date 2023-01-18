const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    let hex = "#"
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = hex + randomColor;

})
