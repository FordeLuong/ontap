import { W1 } from './w1.js';
import { W2 } from './w2.js';
import { W3 } from './w3.js';
import { W4 } from './w4.js';

(function () {
  const DATA = [W1, W2, W3, W4];
  const root = document.getElementById('app-root');
  let checks = {};

  function subId(wi, di, bi, si) { return 'w' + wi + 'd' + di + 'b' + bi + 's' + si; }

  function hashFor(wi, di) {
    const n = wi * 10 + di;
    return (n * 2654435761 % 16777215).toString(16).slice(0, 6).padStart(6, '0');
  }

  function loadChecks() {
    try {
      const res = localStorage.getItem('study-plan-checks-v2');
      if (res) checks = JSON.parse(res);
    } catch (e) { checks = {}; }
    render();
  }

  function saveChecks() {
    try { localStorage.setItem('study-plan-checks-v2', JSON.stringify(checks)); }
    catch (e) { /* ignore */ }
  }

  function totalSubs() {
    let t = 0;
    DATA.forEach(function (w) {
      w.days.forEach(function (d) {
        d.blocks.forEach(function (b) { t += (b.subs || []).length; });
      });
    });
    return t;
  }

  function checkedCount() {
    return Object.values(checks).filter(Boolean).length;
  }

  function render() {
    const total = totalSubs();
    const done = checkedCount();
    const pct = total ? Math.round((done / total) * 100) : 0;

    let html = '<div class="wrap">';
    html += '<div class="hero">';
    html += '<div class="hero-eyebrow">// lo-trinh-on-tap --interview-prep --duration=28d</div>';
    html += '<h1>Lộ trình ôn luyện 4 tuần</h1>';
    html += '<p>Python · Pandas/NumPy · ML/DL · NLP/HuggingFace · Prompt Engineering · FastAPI · MySQL · React</p>';
    html += '<div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<div class="progress-label">' + done + '/' + total + ' · ' + pct + '%</div></div>';
    html += '<button class="reset-btn" id="reset-btn">';
    html += '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:middle"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>';
    html += 'Đặt lại toàn bộ tiến độ</button>';
    html += '</div>';

    DATA.forEach(function (w, wi) {
      var wDone = 0, wTotal = 0;
      w.days.forEach(function (d, di) {
        d.blocks.forEach(function (b, bi) {
          (b.subs || []).forEach(function (s, si) {
            wTotal++;
            if (checks[subId(wi, di, bi, si)]) wDone++;
          });
        });
      });
      var wPct = wTotal ? Math.round((wDone / wTotal) * 100) : 0;
      var wComplete = wDone === wTotal && wTotal > 0;

      html += '<details class="week"' + (wi === 0 ? ' open' : '') + '>';
      html += '<summary class="week-head">';
      html += '<span class="week-tag">' + w.tag + '</span>';
      html += '<div class="week-titles"><div class="wt">' + w.title + ' — ' + w.subtitle + '</div>';
      html += '<div class="ws">' + wDone + '/' + wTotal + ' việc đã hoàn thành</div></div>';
      html += '<div class="week-mini-track"><div class="week-mini-fill" style="width:' + wPct + '%;background:' + (wComplete ? 'var(--amber)' : 'var(--teal)') + '"></div></div>';
      html += '<span class="week-caret">▸</span>';
      html += '</summary><div class="days">';

      w.days.forEach(function (d, di) {
        var dDone = 0, dTotal = 0;
        d.blocks.forEach(function (b, bi) {
          (b.subs || []).forEach(function (s, si) {
            dTotal++;
            if (checks[subId(wi, di, bi, si)]) dDone++;
          });
        });
        var dComplete = dDone === dTotal && dTotal > 0;

        html += '<div class="day-card' + (dComplete ? ' done' : '') + '">';
        html += '<div class="day-head"><span class="day-hash">#' + hashFor(wi + 1, di + 1) + '</span>';
        html += '<span class="day-dow">' + d.dow + '</span>';
        html += '<span class="day-theme">' + d.theme + '</span></div>';
        html += '<div class="blocks">';

        d.blocks.forEach(function (b, bi) {
          var bDone = 0;
          var subs = b.subs || [];
          subs.forEach(function (s, si) {
            if (checks[subId(wi, di, bi, si)]) bDone++;
          });
          var bComplete = bDone === subs.length && subs.length > 0;

          html += '<div class="block-group' + (bComplete ? ' block-done' : '') + '">';
          html += '<div class="block-header">';
          html += '<span class="task-time">' + b.time + '</span>';
          html += '<span class="block-title">' + b.title + '</span>';
          html += '<span class="block-count">' + bDone + '/' + subs.length + '</span>';
          html += '</div>';
          html += '<div class="sub-list">';

          subs.forEach(function (s, si) {
            var id = subId(wi, di, bi, si);
            var isChecked = !!checks[id];
            var text = typeof s === 'string' ? s : s.t;
            var link = typeof s === 'object' && s.link ? s.link : null;
            
            html += '<label class="sub-item' + (isChecked ? ' checked' : '') + '" data-id="' + id + '">';
            html += '<input type="checkbox"' + (isChecked ? ' checked' : '') + ' data-id="' + id + '"/>';
            html += '<span class="box"></span>';
            html += '<span class="sub-text">' + text + '</span>';
            if (link) {
              html += '<a href="' + link + '" target="_blank" class="sub-link" onclick="event.stopPropagation()">mở trang →</a>';
            }
            html += '</label>';
          });

          html += '</div></div>';
        });

        html += '</div></div>';
      });

      html += '</div></details>';
    });

    html += '<div class="footer-note">tiến độ được lưu tự động trên trình duyệt này</div>';
    html += '</div>';

    root.innerHTML = html;

    root.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener('change', function (e) {
        var id = e.target.getAttribute('data-id');
        checks[id] = e.target.checked;
        saveChecks();
        render();
      });
    });

    var resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (confirm('Xoá toàn bộ tiến độ đã tick? Hành động này không thể hoàn tác.')) {
          checks = {};
          saveChecks();
          render();
        }
      });
    }
  }

  loadChecks();
})();
