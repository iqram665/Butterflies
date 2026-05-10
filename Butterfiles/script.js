const container = document.getElementById('container');

for (let i = 0; i < 20; i++) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerText = '🦋'; // butterfly emoji
    
    // random position for each butterfly
    butterfly.style.left = Math.random() * window.innerWidth + 'px';
    butterfly.style.top = Math.random() * window.innerHeight + 'px';
    
    // animation delay so they don't all fly together
    butterfly.style.animationDelay = Math.random() * 5 + 's';
    
    container.appendChild(butterfly);
}