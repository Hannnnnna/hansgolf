// nav.js — 햄버거 메뉴 토글
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  // 메뉴 바깥 클릭 시 닫기
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // 현재 페이지 링크 active 표시
  const links = nav.querySelectorAll('a');
  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.closest('li').classList.add('active');
    }
  });
})();
