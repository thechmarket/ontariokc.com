(function() {
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    var target = href.split('/').pop();
    if (page === '' || page === 'index.html') {
      return target === 'index.html' || target === '' ? ' class="active"' : '';
    }
    return page === target ? ' class="active"' : '';
  }

  var navHTML = `
<style>
nav{position:fixed;top:0;left:0;right:0;z-index:999;height:62px;background:rgba(13,31,53,0.97);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:space-between;padding:0 4%}
.nav-brand{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
.nav-logo-mark{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#c8a24a,#e6c46a);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;color:#0d1f35;letter-spacing:-0.5px;font-family:'Noto Sans KR',sans-serif}
.nav-title-wrap{display:flex;flex-direction:column}
.nav-name{color:#fff;font-weight:700;font-size:13px;line-height:1.3;font-family:'Noto Sans KR',sans-serif}
.nav-name em{color:#c8a24a;font-style:normal}
.nav-url{color:rgba(255,255,255,0.35);font-size:10px;font-family:'Noto Sans KR',sans-serif}
.nav-menu{display:flex;align-items:center;gap:14px}
.nav-menu a{color:rgba(255,255,255,0.68);font-size:12px;text-decoration:none;white-space:nowrap;transition:color .2s;font-family:'Noto Sans KR',sans-serif}
.nav-menu a:hover{color:#e6c46a}
.nav-menu a.active{color:#e6c46a;font-weight:700}
.nav-cta-btn{background:linear-gradient(135deg,#c8a24a,#e6c46a);color:#0d1f35!important;font-weight:700!important;padding:7px 14px;border-radius:6px;font-size:12px!important}
.okc-ham{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.okc-ham span{display:block;width:22px;height:2px;background:#fff;border-radius:2px}
.okc-mob{display:none;position:fixed;top:62px;left:0;right:0;background:rgba(13,31,53,0.98);backdrop-filter:blur(12px);padding:16px 4% 20px;z-index:998;flex-direction:column;gap:0;border-top:1px solid rgba(255,255,255,0.1)}
.okc-mob.open{display:flex}
.okc-mob a{color:rgba(255,255,255,0.75);font-size:14px;text-decoration:none;padding:13px 0;border-bottom:1px solid rgba(255,255,255,0.07);transition:color .2s;font-family:'Noto Sans KR',sans-serif}
.okc-mob a:hover,.okc-mob a.active{color:#e6c46a}
.okc-mob .mob-cta{margin-top:12px;background:linear-gradient(135deg,#c8a24a,#e6c46a);color:#0d1f35!important;font-weight:700;padding:13px;border-radius:9px;text-align:center;border-bottom:none!important}
body{padding-top:62px}
@media(max-width:960px){.nav-menu{display:none}.okc-ham{display:flex}}
</style>
<nav>
  <a class="nav-brand" href="index.html">
    <div class="nav-logo-mark">OKC</div>
    <div class="nav-title-wrap">
      <div class="nav-name">온타리오 한인 커뮤니티 <em>OKC</em></div>
      <div class="nav-url">ontariokc.com</div>
    </div>
  </a>
  <div class="nav-menu">
    <a href="index.html"${isActive('index.html')}>홈</a>
    <a href="index.html#hub">서비스</a>
    <a href="index.html#kakao">오픈톡방</a>
    <a href="https://cafe.naver.com/canadalove" target="_blank">네이버카페</a>
    <a href="directory.html"${isActive('directory.html')}>한인 업체 찾기</a>
    <a href="jobs.html"${isActive('jobs.html')}>도움 주고받기</a>
    <a href="ads.html"${isActive('ads.html')}>광고 상품 안내</a>
    <a href="https://thechmarket.com" target="_blank">더채움마켓</a>
    <a href="ads.html#apply" class="nav-cta-btn">광고 신청</a>
  </div>
  <button class="okc-ham" id="okcHam"><span></span><span></span><span></span></button>
</nav>
<div class="okc-mob" id="okcMob">
  <a href="index.html">홈</a>
  <a href="index.html#hub">서비스</a>
  <a href="index.html#kakao">오픈톡방</a>
  <a href="https://cafe.naver.com/canadalove" target="_blank">네이버카페</a>
  <a href="directory.html">한인 업체 찾기</a>
  <a href="jobs.html">도움 주고받기</a>
  <a href="ads.html">광고 상품 안내</a>
  <a href="https://thechmarket.com" target="_blank">더채움마켓</a>
  <a href="ads.html#apply" class="mob-cta">광고 신청</a>
</div>`;

  document.getElementById('okc-nav').innerHTML = navHTML;

  document.getElementById('okcHam').addEventListener('click', function() {
    document.getElementById('okcMob').classList.toggle('open');
  });
  document.querySelectorAll('.okc-mob a').forEach(function(a) {
    a.addEventListener('click', function() {
      document.getElementById('okcMob').classList.remove('open');
    });
  });
})();
