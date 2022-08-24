const cellElements = document.querySelectorAll('[data-cell]');

let isCircleTurn;

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
}

const handleClick = () => {
    // Colocar a marca (X ou Circulo)

    // Verificar por vitória

    // Verificar por empate

    // Mudar símbolo
}