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
      hero_title: 'HANS GOLF<br>THAILAND TOUR', hero_sub: 'SI RACHA',
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
      quote_tour_note: '현재 태국 상주 중입니다.<br>카카오톡이나 태국연락처로 문의주시면 빠른 답장드리겠습니다.',
      fitting_coming: 'Coming Soon',
      fitting_desc: '현재 태국 현지와 한국 전주 피팅센터 운영중입니다.<br>자세한 내용은 추후에 업로드 하겠습니다.',
      immi_h2: '방콕 수완나폼공항 입국절차와 만남의 장소',
      immi_p1: '비행기가 태국 공항에 착륙하게 되면 사람들을 따라 건물 안으로 들어갈 때까지 이동합니다.',
      immi_p2: '공항 건물에 들어서면 먼저 위와 같은 표지판을 찾으시고 입국심사(Immigration)와 화물 찾는 곳(Baggage Claim)으로 표지판을 따라가시면 됩니다.',
      immi_p3: '가다 보면 FOREIGN PASSPORT라고 쓰인 곳에서 입국심사를 받으시면 됩니다. 순서를 기다렸다가 여권과 출입국 심사서를 함께 제출해 주시고 소형 카메라를 보고만 계시면 간단히 입국심사는 끝입니다.',
      immi_p4: '입국심사서는 아래와 같이 준비해 주세요.',
      immi_p5: '입국심사가 끝나셨다면 아래와 같은 표지판을 찾아 비행기 편명의 화물이 몇 번 Claim에서 나오는지 확인해주세요.',
      immi_p6: '화물을 찾으신 후 EXIT 표지판을 찾으시면 됩니다. 별도의 세관 신고가 필요 없으실 경우에는 녹색 문(Nothing to Declare)으로 나오시면 됩니다.',
      immi_p7: '출구로 나오시면 표지판을 들고 서있는 태국인들이 보입니다. "한스골프투어" 표지판에서 본인의 이름이나 인솔자의 이름을 찾으시면 됩니다.',
      immi_highlight: '<strong>한 층 아래 8번 출입구 앞</strong>에서 기다리고 있겠습니다.<br>좋은 여행이 되시도록 최선을 다해 모시겠습니다.',
      hotel_h2: '시설 안내',
      hotel_h3: '호텔 영상',
      hotel_addr: '92 Sukhumvit Rd, Si Racha, Si Racha District, Chon Buri 20110, Thailand',
      nearby_desc: '이 외의 동물원, 낚시터 등 여러 관광 시설들이 있습니다.',
      nearby_dist1: '호텔에서 도보 1분', nearby_dist2: '호텔에서 도보 1분',
      nearby_dist3: '호텔에서 도보 10분', nearby_dist4: '호텔에서 도보 1분',
      nearby_dist5: '호텔에서 차로 10분', nearby_dist6: '호텔에서 도보 10분, 배로 35분',
      nearby_cat1: '백화점', nearby_cat2: '쇼핑센터', nearby_cat3: '인공 섬',
      nearby_cat4: '야시장 거리', nearby_cat5: '수도원', nearby_cat6: '코 시창 섬',
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
      hero_title: 'HANS GOLF<br>THAILAND TOUR', hero_sub: 'SI RACHA',
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
      quote_tour_note: 'Currently residing in Thailand.<br>Contact us via KakaoTalk or Thai phone for a quick response.',
      fitting_coming: 'Coming Soon',
      fitting_desc: 'Currently operating fitting centers in Thailand and Jeonju, Korea.<br>Details will be uploaded soon.',
      immi_h2: 'Bangkok Suvarnabhumi Airport Arrival & Meeting Point',
      immi_p1: 'After landing at the Thai airport, follow the crowd and walk until you enter the terminal building.',
      immi_p2: 'Once inside, look for signs directing you to Immigration and Baggage Claim.',
      immi_p3: 'Proceed to the FOREIGN PASSPORT lane, wait your turn, present your passport and arrival card, and look at the camera.',
      immi_p4: 'Please prepare your arrival card as shown below.',
      immi_p5: 'After clearing immigration, check the display boards for your flight baggage claim number.',
      immi_p6: 'After collecting your baggage, look for EXIT signs. If you have nothing to declare, use the green channel.',
      immi_p7: 'Outside, look for the "Hans Golf Tour" sign with your name or your guide name.',
      immi_highlight: 'We will be waiting at <strong>Gate 8 on the floor below</strong>.<br>We look forward to serving you on a wonderful trip.',
      hotel_h2: 'Facility Guide',
      hotel_h3: 'Hotel Video',
      hotel_addr: '92 Sukhumvit Rd, Si Racha, Si Racha District, Chon Buri 20110, Thailand',
      nearby_desc: 'There are also zoos, fishing spots, and various other tourist attractions.',
      nearby_dist1: '1 min walk from hotel', nearby_dist2: '1 min walk from hotel',
      nearby_dist3: '10 min walk from hotel', nearby_dist4: '1 min walk from hotel',
      nearby_dist5: '10 min drive from hotel', nearby_dist6: '10 min walk + 35 min by boat',
      nearby_cat1: 'Department Store', nearby_cat2: 'Shopping Center', nearby_cat3: 'Artificial Island',
      nearby_cat4: 'Night Market', nearby_cat5: 'Monastery', nearby_cat6: 'Ko Si Chang Island',
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
      hero_title: 'HANS GOLF<br>THAILAND TOUR', hero_sub: 'SI RACHA',
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
      quote_tour_note: 'ปัจจุบันพักอยู่ในประเทศไทย<br>ติดต่อผ่าน KakaoTalk หรือโทรศัพท์ไทยเพื่อรับการตอบกลับอย่างรวดเร็ว',
      fitting_coming: 'Coming Soon',
      fitting_desc: 'ปัจจุบันเปิดให้บริการที่ประเทศไทยและเจนจู เกาหลี<br>รายละเอียดเพิ่มเติมจะอัปโหลดเร็วๆ นี้',
      immi_h2: 'ขั้นตอนเข้าเมืองที่สนามบินสุวรรณภูมิและจุดนัดพบ',
      immi_p1: 'หลังจากเครื่องลงจอด ให้เดินตามผู้โดยสารเข้าสู่อาคารผู้โดยสาร',
      immi_p2: 'เมื่อเข้ามาในอาคารแล้ว มองหาป้ายชี้ทางไปยัง Immigration และ Baggage Claim',
      immi_p3: 'เข้าช่อง FOREIGN PASSPORT ต่อคิว ยื่นหนังสือเดินทางพร้อมบัตรขาเข้า มองกล้อง',
      immi_p4: 'กรุณาเตรียมบัตรขาเข้าตามตัวอย่างด้านล่าง',
      immi_p5: 'หลังผ่านตรวจคนเข้าเมือง ตรวจสอบหมายเลข Claim ของเที่ยวบิน',
      immi_p6: 'หลังรับสัมภาระแล้ว มองหาป้าย EXIT ไม่มีของสำแดงให้เดินออกทางประตูสีเขียว',
      immi_p7: 'ออกมาแล้วมองหาป้าย "Hans Golf Tour" ที่มีชื่อของท่าน',
      immi_highlight: 'เราจะรอท่านที่ <strong>ประตู 8 ชั้นล่าง</strong><br>ขอให้มีการเดินทางที่สนุกสนาน',
      hotel_h2: 'คู่มือสิ่งอำนวยความสะดวก',
      hotel_h3: 'วิดีโอโรงแรม',
      hotel_addr: '92 Sukhumvit Rd, Si Racha, Si Racha District, Chon Buri 20110, Thailand',
      nearby_desc: 'นอกจากนี้ยังมีสวนสัตว์ แหล่งตกปลา และสถานที่ท่องเที่ยวอื่นๆ',
      nearby_dist1: 'เดิน 1 นาทีจากโรงแรม', nearby_dist2: 'เดิน 1 นาทีจากโรงแรม',
      nearby_dist3: 'เดิน 10 นาทีจากโรงแรม', nearby_dist4: 'เดิน 1 นาทีจากโรงแรม',
      nearby_dist5: 'ขับรถ 10 นาทีจากโรงแรม', nearby_dist6: 'เดิน 10 นาที + เรือ 35 นาที',
      nearby_cat1: 'ห้างสรรพสินค้า', nearby_cat2: 'ศูนย์การค้า', nearby_cat3: 'เกาะเทียม',
      nearby_cat4: 'ตลาดกลางคืน', nearby_cat5: 'วัด', nearby_cat6: 'เกาะสีชัง',
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
    el.insertBefore(document.createTextNode(text), el.firstChild);
  }

  function applyLang(lang) {
    var t = TEXTS[lang] || TEXTS.ko;

    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = { ko: 'ko', en: 'en', th: 'th' }[lang] || 'ko';

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var val = t[key];
      if (val === undefined) return;

      /* <br> 포함된 값은 innerHTML로 처리 */
      if (val.indexOf('<br>') !== -1) {
        el.innerHTML = val;
        return;
      }

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
