document.addEventListener('DOMContentLoaded', () => {
    const inviteBtn = document.getElementById('inviteBtn');
    
    if (inviteBtn) {
        inviteBtn.addEventListener('click', () => {
            alert('La funcionalidad de invitación se implementaría aquí.');
        });
    }

    // Añadir clase activa al elemento de navegación actual
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });
});