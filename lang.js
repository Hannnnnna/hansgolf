(function () {
  var STORAGE_KEY  = 'hg_lang';
  var DEFAULT_LANG = 'ko';

  var TEXTS = {
    ko: {
      nav_home: '홈', nav_profile: '프로필',
      nav_tour: '투어소개', nav_courses: '코스소개',
      nav_bangpra: '방프라', nav_mountain: '마운틴 쉐도우',
      nav_khao: '카오 키여우', nav_crystal: '크리스탈 베이',
      nav_hotel: '호텔시설', nav_nearby: '주변시설',
      nav_quote: '견적문의', nav_quote_tour: '태국 골프여행 견적',
      nav_quote_lesson: '레슨 프로그램 견적',
      nav_fitting: '클럽피팅', nav_immigration: '입국정보',
      tagline1: '한스골프 태국 골프여행 시라차',
      tagline2: '태국 현지 골프 투어 · 현지 아카데미 레슨 프로그램',
      hero_eyebrow: 'Sriracha, Thailand',
      hero_title: 'HANS GOLF THAILAND TOUR', hero_sub: 'SIRACHA',
      kakao: '카카오톡', email: 'Email',
      thai_phone: '태국전화', korea_phone: '국내 긴급전화',
      band_btn: '네이버밴드 바로가기', footer_privacy: '개인정보처리방침',
      /* 인덱스 */
      hero_eyebrow: 'Sriracha, Thailand',
      /* 프로필 본문 */
      profile_title: '한스골프 태국투어 시라차',
      profile_p1: '태국 시라차 한병민 프로입니다.',
      profile_p2: '전지훈련의 좋은 성과를 얻기 위해서 무엇보다도 코스의 선정이 가장 중요합니다.',
      profile_p3: '다양한 상황에서 샷의 숙련도를 키우기 위해서는 평범하기만 한 코스에서는 얻기 힘들다는 것은 누구나 인지하고 있는 사실입니다.',
      profile_p4: '다양한 코스와 다양한 공략, 다양한 거리의 감각 등이 골프의 완숙미를 만들어 줄 것이라고 확신합니다.',
      profile_p5: '모든 일에 항상 노력하는 자세로 고객들의 요구에 부응하여 만족스러운 골프여행이 되실 수 있도록 최선을 다하겠습니다.',
      profile_cert: '태국 정식 인증 업체',
      /* 공통 페이지 제목 */
      page_profile: '프로필',
      page_hotel: '호텔시설',
      page_nearby: '주변시설',
      page_quote_tour: '태국 골프여행',
      page_quote_lesson: '레슨 프로그램 견적',
      page_fitting: '클럽피팅',
      page_immigration: '입국정보',
      page_privacy: '개인정보처리방침',
    },
    en: {
      nav_home: 'Home', nav_profile: 'Profile',
      nav_tour: 'Tour Info', nav_courses: 'Courses',
      nav_bangpra: 'Bangpra', nav_mountain: 'Mountain Shadow',
      nav_khao: 'Khao Kheow', nav_crystal: 'Crystal Bay',
      nav_hotel: 'Hotel', nav_nearby: 'Nearby',
      nav_quote: 'Inquiry', nav_quote_tour: 'Golf Tour Quote',
      nav_quote_lesson: 'Lesson Quote',
      nav_fitting: 'Club Fitting', nav_immigration: 'Immigration',
      tagline1: 'Hans Golf Thailand Tour – Sriracha',
      tagline2: 'Thailand Golf Tour · On-site Academy Lesson Program',
      hero_eyebrow: 'Sriracha, Thailand',
      hero_title: 'HANS GOLF THAILAND TOUR', hero_sub: 'SIRACHA',
      kakao: 'KakaoTalk', email: 'Email',
      thai_phone: 'Thailand', korea_phone: 'Korea (Emergency)',
      band_btn: 'Naver Band', footer_privacy: 'Privacy Policy',
      hero_eyebrow: 'Sriracha, Thailand',
      profile_title: 'Hans Golf Thailand Tour · Sriracha',
      profile_p1: 'I am Pro Han Byung-min based in Sriracha, Thailand.',
      profile_p2: 'To achieve great results in training camps, selecting the right golf course is the most important factor.',
      profile_p3: 'Everyone knows that improving shot skills in various situations is difficult on an ordinary course.',
      profile_p4: 'We believe that diverse courses, strategies, and distance sensations will help you master golf.',
      profile_p5: 'We will do our utmost to meet your needs and ensure a satisfying golf trip.',
      profile_cert: 'Officially Certified in Thailand',
      page_profile: 'Profile',
      page_hotel: 'Hotel Facilities',
      page_nearby: 'Nearby Attractions',
      page_quote_tour: 'Golf Tour Quote',
      page_quote_lesson: 'Lesson Program Quote',
      page_fitting: 'Club Fitting',
      page_immigration: 'Immigration Info',
      page_privacy: 'Privacy Policy',
    },
    th: {
      nav_home: 'หน้าหลัก', nav_profile: 'โปรไฟล์',
      nav_tour: 'ข้อมูลทัวร์', nav_courses: 'สนาม',
      nav_bangpra: 'บางพระ', nav_mountain: 'เมาน์เทน แชโดว์',
      nav_khao: 'เขาเขียว', nav_crystal: 'คริสตัล เบย์',
      nav_hotel: 'โรงแรม', nav_nearby: 'สถานที่ใกล้เคียง',
      nav_quote: 'สอบถามราคา', nav_quote_tour: 'ใบเสนอราคาทัวร์กอล์ฟ',
      nav_quote_lesson: 'ใบเสนอราคาโปรแกรมเลสสัน',
      nav_fitting: 'ฟิตติ้งไม้กอล์ฟ', nav_immigration: 'ข้อมูลเข้าประเทศ',
      tagline1: 'Hans Golf ทัวร์กอล์ฟไทย ศรีราชา',
      tagline2: 'ทัวร์กอล์ฟในประเทศ · โปรแกรมเลสสันอะคาเดมี',
      hero_eyebrow: 'ศรีราชา ประเทศไทย',
      hero_title: 'HANS GOLF THAILAND TOUR', hero_sub: 'SIRACHA',
      kakao: 'KakaoTalk', email: 'อีเมล',
      thai_phone: 'โทรไทย', korea_phone: 'เกาหลี (ฉุกเฉิน)',
      band_btn: 'Naver Band', footer_privacy: 'นโยบายความเป็นส่วนตัว',
      hero_eyebrow: 'ศรีราชา ประเทศไทย',
      profile_title: 'Hans Golf ทัวร์ไทย ศรีราชา',
      profile_p1: 'ผม โปร ฮัน บยอง-มิน ประจำอยู่ที่ศรีราชา ประเทศไทย',
      profile_p2: 'เพื่อให้ได้ผลดีจากการฝึกซ้อม การเลือกสนามกอล์ฟที่เหมาะสมเป็นสิ่งสำคัญที่สุด',
      profile_p3: 'ทุกคนรู้ดีว่าการพัฒนาทักษะในสถานการณ์ที่หลากหลายนั้นยากในสนามธรรมดา',
      profile_p4: 'เราเชื่อว่าสนามที่หลากหลาย กลยุทธ์ และความรู้สึกระยะทางจะช่วยให้คุณเชี่ยวชาญกอล์ฟ',
      profile_p5: 'เราจะพยายามอย่างเต็มที่เพื่อตอบสนองความต้องการของคุณและให้การเดินทางกอล์ฟที่น่าพึงพอใจ',
      profile_cert: 'บริษัทรับรองอย่างเป็นทางการในประเทศไทย',
      page_profile: 'โปรไฟล์',
      page_hotel: 'สิ่งอำนวยความสะดวกโรงแรม',
      page_nearby: 'สถานที่ใกล้เคียง',
      page_quote_tour: 'ใบเสนอราคาทัวร์กอล์ฟ',
      page_quote_lesson: 'ใบเสนอราคาโปรแกรมเลสสัน',
      page_fitting: 'ฟิตติ้งไม้กอล์ฟ',
      page_immigration: 'ข้อมูลเข้าประเทศ',
      page_privacy: 'นโยบายความเป็นส่วนตัว',
    }
  };

  /* 요소의 직계 텍스트 노드만 교체 — 자식 엘리먼트(span.arrow, ul 등) 보존 */
  function setFirstTextNode(el, text) {
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 3) {   /* TEXT_NODE */
        el.childNodes[i].nodeValue = text;
        return;
      }
    }
    /* 텍스트 노드가 없으면 맨 앞에 삽입 */
    el.insertBefore(document.createTextNode(text), el.firstChild);
  }

  function applyLang(lang) {
    var t = TEXTS[lang] || TEXTS.ko;

    /* html 속성 */
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = { ko: 'ko', en: 'en', th: 'th' }[lang] || 'ko';

    /* 버튼 active */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* 텍스트 교체 */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var val = t[key];
      if (val === undefined) return;

      if (el.children.length > 0) {
        /* 자식 엘리먼트가 있으면(드롭다운 ul, span.arrow 등) 텍스트 노드만 교체 */
        setFirstTextNode(el, val);
      } else {
        el.textContent = val;
      }
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(saved || DEFAULT_LANG);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
