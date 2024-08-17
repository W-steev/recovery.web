const sidebar = document.querySelector('.js-sidebar');

function showSidebar() {
  sidebar.style.display = 'flex';
};

function hideSidebar() {
  sidebar.style.display = 'none';
};

const menu = document.querySelector('.js-menu');
const close = document.querySelector('.js-close');

menu.addEventListener('click',() => {
  showSidebar();
});
close.addEventListener('click',() => {
  hideSidebar();
});