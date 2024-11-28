const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('click', () => {
    cursor.classList.add('active'); 
    cursor.classList.add('rotate'); 

    setTimeout(() => {
        cursor.classList.remove('active');
    }, 200); 
});

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.classList.add('rotate');
    });

    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('rotate');
    });
});