// scroll-animate.js — 위에서 아래로 순서대로 페이드인
(function () {

  var SELECTORS = [
    '.page-hero',
    '.page-content h1',
    '.page-content h2',
    '.page-content h3.section-heading',
    '.profile-intro p',
    '.page-content address',
    '.exp-table tr',
    '.cert-grid img',
    '.gallery-grid img',
    '.immi-step',
    '.highlight-box',
  ].join(', ');

  function init() {
    var els = Array.from(document.querySelectorAll(SELECTORS));
    if (!els.length) return;

    // 페이지 순서(위→아래) 기준으로 정렬
    els.sort(function (a, b) {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });

    // 초기 상태 세팅
    els.forEach(function (el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    var delay = 0;

    var observer = new IntersectionObserver(function (entries) {
      // 이번에 보이게 된 것들만 위→아래 순서로 처리
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) {
          return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
        });

      visible.forEach(function (entry, i) {
        var el = entry.target;
        setTimeout(function () {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }, i * 80);   // 80ms 간격으로 위→아래 순서대로
        observer.unobserve(el);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
