// lang.js — 언어 선택 (한국어 / English / ภาษาไทย)
(function () {
  var STORAGE_KEY = 'hg_lang';
  var DEFAULT_LANG = 'ko';

  // 언어별 텍스트 데이터
  var TEXTS = {
    ko: {
      nav_home:        '홈',
      nav_profile:     '프로필',
      nav_tour:        '투어소개',
      nav_courses:     '코스소개',
      nav_bangpra:     '방프라',
      nav_mountain:    '마운틴 쉐도우',
      nav_khao:        '카오 키여우',
      nav_crystal:     '크리스탈 베이',
      nav_hotel:       '호텔시설',
      nav_nearby:      '주변시설',
      nav_quote:       '견적문의',
      nav_quote_tour:  '태국 골프여행 견적',
      nav_quote_lesson:'레슨 프로그램 견적',
      nav_fitting:     '클럽피팅',
      nav_immigration: '입국정보',
      tagline1:        '한스골프 태국 골프여행 시라차',
      tagline2:        '태국 현지 골프 투어 | 현지 아카데미 레슨 프로그램',
      hero_eyebrow:    'Sriracha, Thailand',
      hero_title:      'HANS GOLF THAILAND TOUR',
      hero_sub:        'SIRACHA',
      kakao:           '카카오톡',
      email:           'Email',
      thai_phone:      '태국전화',
      korea_phone:     '국내 긴급전화',
      band_btn:        '네이버밴드 바로가기',
      footer_privacy:  '개인정보처리방침',
    },
    en: {
      nav_home:        'Home',
      nav_profile:     'Profile',
      nav_tour:        'Tour Info ▾',
      nav_courses:     'Courses ▸',
      nav_bangpra:     'Bangpra',
      nav_mountain:    'Mountain Shadow',
      nav_khao:        'Khao Kheow',
      nav_crystal:     'Crystal Bay',
      nav_hotel:       'Hotel',
      nav_nearby:      'Nearby',
      nav_quote:       'Inquiry ▾',
      nav_quote_tour:  'Golf Tour Quote',
      nav_quote_lesson:'Lesson Quote',
      nav_fitting:     'Club Fitting',
      nav_immigration: 'Immigration',
      tagline1:        'Hans Golf Thailand Tour – Sriracha',
      tagline2:        'Thailand Golf Tour | On-site Academy Lesson Program',
      hero_eyebrow:    'Sriracha, Thailand',
      hero_eyebrow:    'Sriracha, Thailand',
      hero_title:      'HANS GOLF THAILAND TOUR',
      hero_sub:        'SIRACHA',
      kakao:           'KakaoTalk',
      email:           'Email',
      thai_phone:      'Thailand',
      korea_phone:     'Korea (Emergency)',
      band_btn:        'Naver Band',
      footer_privacy:  'Privacy Policy',
    },
    th: {
      nav_home:        'หน้าหลัก',
      nav_profile:     'โปรไฟล์',
      nav_tour:        'ข้อมูลทัวร์ ▾',
      nav_courses:     'สนาม ▸',
      nav_bangpra:     'บางพระ',
      nav_mountain:    'เมาน์เทน แชโดว์',
      nav_khao:        'เขาเขียว',
      nav_crystal:     'คริสตัล เบย์',
      nav_hotel:       'โรงแรม',
      nav_nearby:      'สถานที่ใกล้เคียง',
      nav_quote:       'สอบถามราคา ▾',
      nav_quote_tour:  'ใบเสนอราคาทัวร์กอล์ฟ',
      nav_quote_lesson:'ใบเสนอราคาโปรแกรมเลสสัน',
      nav_fitting:     'ฟิตติ้งไม้กอล์ฟ',
      nav_immigration: 'ข้อมูลเข้าประเทศ',
      tagline1:        'Hans Golf ทัวร์กอล์ฟไทย ศรีราชา',
      tagline2:        'ทัวร์กอล์ฟในประเทศ | โปรแกรมเลสสันอะคาเดมี',
      hero_eyebrow:    'Sriracha, Thailand',
      hero_eyebrow:    'ศรีราชา ประเทศไทย',
      hero_title:      'HANS GOLF THAILAND TOUR',
      hero_sub:        'SIRACHA',
      kakao:           'KakaoTalk',
      email:           'อีเมล',
      thai_phone:      'โทรไทย',
      korea_phone:     'เกาหลี (ฉุกเฉิน)',
      band_btn:        'Naver Band',
      footer_privacy:  'นโยบายความเป็นส่วนตัว',
    }
  };

  function applyLang(lang) {
    var t = TEXTS[lang] || TEXTS['ko'];
    document.documentElement.setAttribute('data-lang', lang);

    // Noto Sans KR는 한국어/태국어 모두 사용, 영어는 Arial
    document.body.style.fontFamily = (lang === 'en')
      ? 'Arial, Helvetica, sans-serif'
      : "'Noto Sans KR', sans-serif";

    // 버튼 active 표시
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 텍스트 교체 (data-i18n 속성 기반)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(saved || DEFAULT_LANG);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
