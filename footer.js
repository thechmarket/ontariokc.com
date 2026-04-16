(function() {
  var footerHTML = `
<style>
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
})();
