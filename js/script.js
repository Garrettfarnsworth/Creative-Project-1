const foxResult = document.getElementById('foxResult');
const foxBtn = document.getElementById('foxBtn');

foxBtn.addEventListener('click', getRandomFox);

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        foxResult.innerHTML = `<img src="${data.image}"/>`
    })
}