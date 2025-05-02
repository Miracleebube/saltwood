const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});
