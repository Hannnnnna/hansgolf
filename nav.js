(function () {

  /* ── 햄버거 ───────────────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var nav       = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      hamburger.classList.toggle('open', open);
    });
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }

  /* ── 현재 페이지 active ───────────────────────── */
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      if (a.href === location.href) a.closest('li').classList.add('active');
    });
  }

  /* ── 드롭다운: href="#" 클릭 시 기본동작 막기 ──── */
  /* 데스크탑 hover는 CSS가 담당.
     모바일(768px 이하)에서는 클릭으로 토글 */
  document.querySelectorAll('.has-dropdown > a').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      /* 항상 # 이동 막기 */
      if (trigger.getAttribute('href') === '#') e.preventDefault();

      if (window.innerWidth > 768) return; /* 데스크탑은 CSS hover */

      var li = trigger.parentElement;
      var isOpen = li.classList.contains('mob-open');

      /* 다른 열린 메뉴 닫기 */
      document.querySelectorAll('.has-dropdown.mob-open').forEach(function (el) {
        if (el !== li) el.classList.remove('mob-open');
      });

      li.classList.toggle('mob-open', !isOpen);
    });
  });

  /* 모바일 외부 클릭 시 닫기 */
  document.addEventListener('click', function (e) {
    if (window.innerWidth > 768) return;
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.mob-open').forEach(function (el) {
        el.classList.remove('mob-open');
      });
    }
  });

})();
