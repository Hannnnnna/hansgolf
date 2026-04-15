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
    '.nearby-card',
    '.facility-item2',
    '.coming-soon-box',
    '.fitting-hero',
  ].join(', ');

  function init() {
    var els = Array.from(document.querySelectorAll(SELECTORS));
    if (!els.length) return;

    // 위→아래 DOM 순서로 정렬
    els.sort(function (a, b) {
      return a.compareDocumentPosition(b) & 4 ? -1 : 1;
    });

    // will-animate 클래스 부여 (CSS가 opacity:0 + translateY 상태로 숨김)
    els.forEach(function (el) {
      el.classList.add('will-animate');
    });

    var observer = new IntersectionObserver(function (entries) {
      // 이번 tick에 보이는 요소들만 위→아래 순서로 모아서 stagger
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) {
          return a.target.compareDocumentPosition(b.target) & 4 ? -1 : 1;
        });

      visible.forEach(function (entry, i) {
        var el = entry.target;
        // stagger: 각 요소마다 100ms 간격
        el.style.transitionDelay = (i * 150) + 'ms';
        // 한 프레임 뒤에 클래스 교체 → transition 확실히 트리거
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            el.classList.remove('will-animate');
            el.classList.add('did-animate');
          });
        });
        observer.unobserve(el);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -24px 0px'
    });

    els.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
