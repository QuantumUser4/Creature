document.getElementById('logo').addEventListener('mousemove', function(e) {
    const logo = document.getElementById('logo');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const logoRect = logo.getBoundingClientRect();
    const offsetX = mouseX - logoRect.left - (logoRect.width / 2);
    const offsetY = mouseY - logoRect.top - (logoRect.height / 2);
    logo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

document.getElementById('logo').addEventListener('mouseleave', function() {
    document.getElementById('logo').style.transform = 'translate(0, 0)';
});
