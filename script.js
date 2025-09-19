const companions = Array.from({ length: 20 }, (_, i) => ({
  name: `Companion ${i+1}`,
  price: Math.floor(Math.random()*5000)+5000,
  img: `https://picsum.photos/400/300?random=${i+1}`
}));

let visible = 6;
const grid = document.querySelector('.companions-grid');
const loadMoreBtn = document.getElementById('load-more');
const backToTop = document.getElementById('back-to-top');

function renderCompanions() {
  grid.innerHTML = companions.slice(0, visible).map(c => `
    <div class="companion-card">
      <img src="${c.img}" alt="${c.name}">
      <div class="card-body">
        <h3>${c.name}</h3>
        <p class="price">KES ${c.price}</p>
      </div>
    </div>
  `).join('');
}

loadMoreBtn.addEventListener('click', () => {
  visible += 6;
  if (visible >= companions.length) loadMoreBtn.style.display = 'none';
  renderCompanions();
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

renderCompanions();
