const menu = document.querySelector('#menu');
const btn = document.querySelector('.hamb');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('show'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('show')));
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.partner').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
});
