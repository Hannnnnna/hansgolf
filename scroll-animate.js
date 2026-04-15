// scroll-animate.js — 스크롤 페이드인 (깜빡임 없음)
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
    '.nearby-card',
    '.facility-item2',
    '.coming-soon-box',
    '.fitting-hero',
  ].join(', ');

  // CSS가 로드되기 전에 미리 숨길 클래스를 <html>에 추가
  // → CSS에서 .will-animate 요소를 처음부터 투명하게 처리
  document.documentElement.classList.add('scroll-anim-ready');

  function init() {
    var els = Array.from(document.querySelectorAll(SELECTORS));
    if (!els.length) return;

    // 위→아래 순서 정렬
    els.sort(function (a, b) {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });

    // will-animate 클래스 부여 (CSS가 이 클래스를 보고 숨겨둠)
    els.forEach(function (el) {
      el.classList.add('will-animate');
    });

    var observer = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) {
          return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
        });

      visible.forEach(function (entry, i) {
        var el = entry.target;
        setTimeout(function () {
          el.classList.remove('will-animate');
          el.classList.add('did-animate');
        }, i * 90);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  // DOMContentLoaded 전에 클래스 추가, 초기화는 DOM 준비 후
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
