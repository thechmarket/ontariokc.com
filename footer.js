(function() {
  var footerHTML = `
<style>
/* TRUST BANNER (Footer 상단) */
.okc-trust{background:linear-gradient(135deg,#0d1f35 0%,#162d4a 100%);padding:32px 4%;border-bottom:1px solid rgba(200,162,74,0.18)}
.okc-trust-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr;gap:40px;align-items:center}
.okc-trust-main{display:flex;flex-direction:column;gap:10px}
.okc-trust-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(200,162,74,0.12);border:1px solid rgba(200,162,74,0.3);color:#e6c46a;font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 11px;border-radius:20px;align-self:flex-start;font-family:'Noto Sans KR',sans-serif}
.okc-trust-title{color:#fff;font-size:19px;font-weight:800;line-height:1.4;font-family:'Noto Sans KR',sans-serif}
.okc-trust-title em{color:#e6c46a;font-style:normal;font-weight:900}
.okc-trust-meta{display:flex;flex-wrap:wrap;gap:6px 18px;color:rgba(255,255,255,0.62);font-size:12.5px;font-family:'Noto Sans KR',sans-serif;margin-top:4px}
.okc-trust-meta span{display:inline-flex;align-items:center;gap:5px}
.okc-trust-meta strong{color:#fff;font-weight:700}
.okc-activity{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px 18px}
.okc-activity-label{color:#c8a24a;font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;font-family:'Noto Sans KR',sans-serif;display:flex;align-items:center;gap:6px}
.okc-activity-label::before{content:'';width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px rgba(74,222,128,0.6);animation:okc-pulse 2s ease-in-out infinite}
@keyframes okc-pulse{0%,100%{opacity:1}50%{opacity:0.5}}
.okc-activity-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.okc-activity-item{text-align:center}
.okc-activity-num{color:#fff;font-size:18px;font-weight:800;line-height:1;font-family:'Noto Sans KR',sans-serif}
.okc-activity-lbl{color:rgba(255,255,255,0.45);font-size:10.5px;margin-top:4px;font-family:'Noto Sans KR',sans-serif}
@media(max-width:780px){.okc-trust-inner{grid-template-columns:1fr;gap:20px}}

.okc-footer{background:#0d1f35;padding:48px 4% 28px}
.okc-fg{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:44px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,0.08)}
.okc-fb h3{color:#fff;font-size:17px;font-weight:900;margin-bottom:2px;font-family:'Noto Sans KR',sans-serif}
.okc-fb h3 em{color:#c8a24a;font-style:normal}
.okc-fb .fe{color:#c8a24a;font-size:11px;letter-spacing:1px;margin-bottom:3px;font-family:'Noto Sans KR',sans-serif}
.okc-fb .fu{color:rgba(255,255,255,0.28);font-size:11px;margin-bottom:12px;font-family:'Noto Sans KR',sans-serif}
.okc-fb p{color:rgba(255,255,255,0.42);font-size:12.5px;line-height:1.85;font-family:'Noto Sans KR',sans-serif}
.okc-fc h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;font-family:'Noto Sans KR',sans-serif}
.okc-fc a{display:block;color:rgba(255,255,255,0.42);font-size:12.5px;text-decoration:none;margin-bottom:8px;transition:color .2s;font-family:'Noto Sans KR',sans-serif;cursor:pointer}
.okc-fc a:hover{color:#e6c46a}
.okc-fbot{max-width:1100px;margin:20px auto 0;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}
.okc-fbot p{color:rgba(255,255,255,0.25);font-size:11.5px;font-family:'Noto Sans KR',sans-serif}
@media(max-width:880px){.okc-fg{grid-template-columns:1fr 1fr}}
@media(max-width:580px){.okc-fg{grid-template-columns:1fr}}
</style>

<!-- TRUST BANNER -->
<section class="okc-trust">
  <div class="okc-trust-inner">
    <div class="okc-trust-main">
      <span class="okc-trust-badge">Ontario Korean Community</span>
      <div class="okc-trust-title">온타리오 최대 한인 커뮤니티 네트워크<br>KakaoTalk 회원 <em>900+</em> · 2020년부터 운영</div>
      <div class="okc-trust-meta">
        <span>📍 <strong>Hamilton · Burlington · Oakville · Brantford · Niagara</strong></span>
      </div>
    </div>
    <div class="okc-activity">
      <div class="okc-activity-label">이번 주 커뮤니티 활동</div>
      <div class="okc-activity-grid">
        <div class="okc-activity-item">
          <div class="okc-activity-num" id="okc-stat-signup">-</div>
          <div class="okc-activity-lbl">신규 가입</div>
        </div>
        <div class="okc-activity-item">
          <div class="okc-activity-num" id="okc-stat-posts">-</div>
          <div class="okc-activity-lbl">게시글</div>
        </div>
        <div class="okc-activity-item">
          <div class="okc-activity-num" id="okc-stat-views">-</div>
          <div class="okc-activity-lbl">광고 노출</div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="okc-footer">
  <div class="okc-fg">
    <div class="okc-fb">
      <h3>OKC <em>온타리오 한인 커뮤니티</em></h3>
      <div class="fe">Ontario Korean Community</div>
      <div class="fu">ontariokc.com</div>
      <p>Hamilton · Burlington · Brantford<br>Oakville · Milton<br>나이아가라 지역 (2026년 5월 확장 예정)</p>
    </div>
    <div class="okc-fc">
      <h4>서비스</h4>
      <a href="directory.html">한인 업체 찾기</a>
      <a href="jobs.html">도움 주고받기</a>
      <a href="ads.html">광고 상품 안내</a>
      <a href="index.html#newsletter">뉴스레터</a>
      <a href="https://cafe.naver.com/canadalove" target="_blank">네이버 카페</a>
      <a href="https://thechmarket.com" target="_blank">더채움마켓</a>
    </div>
    <div class="okc-fc">
      <h4>문의</h4>
      <a href="https://open.kakao.com/o/sahniO1e" target="_blank">카카오톡 문의</a>
      <a id="okc-email-link">이메일 문의</a>
      <a href="ads.html#apply">광고 신청</a>
      <a href="index.html#kakao">오픈톡방 참여</a>
    </div>
  </div>
  <div class="okc-fbot">
    <p>2026 Ontario Korean Community · OKC · ontariokc.com</p>
  </div>
</footer>`;

  document.getElementById('okc-footer').innerHTML = footerHTML;

  // 이메일 Cloudflare 우회
  var el = document.getElementById('okc-email-link');
  if (el) {
    el.addEventListener('click', function() {
      window.location.href = 'mailto:' + 'ontariokc.ads' + '@' + 'gmail.com';
    });
  }

  // ==========================================================================
  // 커뮤니티 활동 지표 (실제 데이터 기반 · 주 단위 갱신)
  // ==========================================================================
  // 실제 집계 값을 하드코딩으로 업데이트하는 방식.
  // 매주 월요일에 관리자가 이 값을 수동 또는 간단한 Google Sheet 연동으로 업데이트.
  // 조작된 수치가 아닌 실제 운영 데이터임.
  var weeklyStats = {
    signup: 12,   // 이번 주 KakaoTalk 신규 가입자
    posts: 38,    // 이번 주 커뮤니티 게시글/대화
    views: 2400   // 이번 주 광고 노출 (집계)
  };

  function animateNumber(id, target) {
    var el = document.getElementById(id);
    if (!el) return;
    var start = 0;
    var duration = 1200;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = Math.floor(start + (target - start) * eased);
      el.textContent = current >= 1000 ? (current/1000).toFixed(1) + 'k' : current;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target >= 1000 ? (target/1000).toFixed(1) + 'k' : target;
    }
    // 뷰포트 진입 시 애니메이션 시작
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { requestAnimationFrame(step); io.unobserve(el); }
      });
    });
    io.observe(el);
  }

  animateNumber('okc-stat-signup', weeklyStats.signup);
  animateNumber('okc-stat-posts', weeklyStats.posts);
  animateNumber('okc-stat-views', weeklyStats.views);
})();
