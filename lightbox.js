// lightbox.js — 갤러리 이미지 클릭 시 크게 보기
(function () {

  // lightbox-enabled 클래스가 있는 갤러리의 img만 대상
  var images = Array.from(
    document.querySelectorAll('.gallery-grid.lightbox-enabled img, .facility-grid.lightbox-enabled img')
  );

  if (!images.length) return;

  // 오버레이 HTML 생성
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = [
    '<span class="lightbox-close">&#215;</span>',
    '<span class="lightbox-prev">&#8249;</span>',
    '<img src="" alt="확대 이미지" />',
    '<span class="lightbox-next">&#8250;</span>',
  ].join('');
  document.body.appendChild(overlay);

  var overlayImg  = overlay.querySelector('img');
  var closeBtn    = overlay.querySelector('.lightbox-close');
  var prevBtn     = overlay.querySelector('.lightbox-prev');
  var nextBtn     = overlay.querySelector('.lightbox-next');
  var currentIdx  = 0;

  function open(idx) {
    currentIdx = idx;
    overlayImg.src = images[idx].src;
    overlayImg.alt = images[idx].alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // 화살표: 첫/마지막 이미지에서 숨김
    prevBtn.style.visibility = idx === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = idx === images.length - 1 ? 'hidden' : 'visible';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    overlayImg.src = '';
  }

  function prev() { if (currentIdx > 0) open(currentIdx - 1); }
  function next() { if (currentIdx < images.length - 1) open(currentIdx + 1); }

  // 이미지 클릭 이벤트
  images.forEach(function (img, idx) {
    img.addEventListener('click', function () { open(idx); });
  });

  // 닫기
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  // 이전/다음
  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); prev(); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); next(); });

  // 키보드
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape' || e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

})();
