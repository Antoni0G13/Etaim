const container = document.querySelector('.animation-container');

// Función para crear un nodo
function createNode() {
    const node = document.createElement('div');
    node.classList.add('node');
    container.appendChild(node);
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
}

// Crear nodos de forma aleatoria
for (let i = 0; i < 50; i++) {
    createNode();
}

// Función para conectar nodos con líneas
function connectNodes() {
    const nodes = document.querySelectorAll('.node');

    nodes.forEach(node => {
        const line = document.createElement('div');
        line.classList.add('line');
        container.appendChild(line);

        const startX = parseInt(node.style.left) + node.offsetWidth / 2;
        const startY = parseInt(node.style.top) + node.offsetHeight / 2;

        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;

        const angle = Math.atan2(endY - startY, endX - startX);
        const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}rad)`;
    });
}

// Conectar nodos inicialmente
connectNodes();

// Actualizar la conexión de nodos periódicamente
setInterval(() => {
    container.innerHTML = ''; // Limpiar nodos y líneas existentes
    for (let i = 0; i < 50; i++) {
        createNode();
    }
    connectNodes();
}, 5000);
