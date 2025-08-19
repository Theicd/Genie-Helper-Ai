(function(){
  function initRotator(){
    const grid = document.querySelector('#demos .demo-grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.demo-card'));
    if (cards.length <= 1) return;

    // Cache original src into data-src for reloads
    cards.forEach(card => {
      const ifr = card.querySelector('iframe');
      if (!ifr) return;
      if (!ifr.dataset.src) ifr.dataset.src = ifr.getAttribute('src') || '';
    });

    // Helper: show specific index with reload and fade-in
    let idx = 0;
    function showIndex(nextIdx){
      // Hide all
      cards.forEach((c, i) => {
        if (i !== nextIdx) {
          c.classList.remove('is-visible');
          c.style.display = 'none';
        }
      });

      const card = cards[nextIdx];
      const ifr = card.querySelector('iframe');
      if (!ifr) return;

      // Prepare visible state
      card.classList.remove('is-visible');
      card.style.display = 'block';

      // Force reload from base data-src to restart animation inside the demo
      const base = ifr.dataset.src || '';
      if (base) {
        const sep = base.includes('?') ? '&' : '?';
        // Assign onload to trigger fade-in after content is ready
        ifr.onload = () => {
          // next frame to ensure styles applied
          requestAnimationFrame(() => card.classList.add('is-visible'));
        };
        ifr.src = base + sep + 't=' + Date.now();
      } else {
        // No src? just animate in
        requestAnimationFrame(() => card.classList.add('is-visible'));
      }

      idx = nextIdx;
    }

    // Initialize: hide others and show first with reload and fade-in
    showIndex(0);

    // Auto-rotate every 7s
    setInterval(() => {
      const next = (idx + 1) % cards.length;
      showIndex(next);
    }, 7000);
  }

  /**
   * [Genie Marketing Injection]
   * פונקציה זו מזריקה בלוקים שיווקיים חדשים לדף, ללא שינוי או מחיקה של חלקים קיימים.
   * הקוד שייך למוצר @Genie ומטרתו להציג: איך זה עובד, מדיה לשימוש מותר, קהלי יעד, מחיר ו-FAQ.
   * יש מנגנון הגנה למניעת הזרקה כפולה בעת רענון/טעינה חוזרת של סקריפטים.
   */
  function injectMarketingSections(){
    // מנגנון הגנה: אם כבר הוזרק, לא נזריק שוב
    if (document.getElementById('genie-marketing-pack')) return;

    const containerId = 'genie-marketing-pack';

    // [Genie Intro Clarifier]
    // הוסר לבקשת המשתמש: לא להוסיף כותרת פתיחה חדשה בראש הדף.

    // בניית ה-HTML של כל הבלוקים בתור מקשה אחת כדי לצמצם סיבוכיות ושורות
    const html = `
      <!-- [Genie Marketing Injection] חבילת בלוקים שיווקיים - נוסף ללא שינוי חלקים קיימים -->
      <div id="${containerId}">
        <section id="how-it-works" class="section">
          <h2 class="section-title">איך זה עובד ב‑3 צעדים</h2>
          <div class="glass-card-grid">
            <div class="glass-card">
              <div class="card-icon">1️⃣</div>
              <h3 class="card-title">הצטרפות לניסיון</h3>
              <p class="card-text">מצטרפים לקבוצת ה‑WhatsApp לניסיון חינם ולומדים את הפקודות בדקה.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">2️⃣</div>
              <h3 class="card-title">שואלים עם @</h3>
              <p class="card-text">שאלות לימוד, קופי ורעיונות. לדוגמה: “@ תרגול עשרוני לכיתה ו׳”.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">3️⃣</div>
              <h3 class="card-title">מבקשים מדיה עם !</h3>
              <p class="card-text">תמונות/וידאו לשימוש מותר לפרסומים, דפי נחיתה ו‑Canva — בשניות.</p>
            </div>
          </div>
          <!-- [Genie Marketing Injection] העברת משפט העזר מ"תמחור" ל"איך זה עובד" לבקשת המשתמש -->
          <p class="card-text" style="margin-top:10px; text-align:right; color:#aab;">מסמנים @ לשאלה או ! למדיה — ומקבלים תוצאה שמישה בדקות.</p>
        </section>

        <section id="media-library" class="section">
          <h2 class="section-title">מאגר מדיה חוקית לשימוש מיידי</h2>
          <!-- [Genie Marketing Injection] פסקת הסבר מתחת לכותרת – מה זה ואיך זה קשור -->
          <p class="card-text" id="media-library-explainer">
            Genie מוצא לך תמונות וסרטונים לשימוש חוקי בשניות, עם קישור למקור וקרדיט — מוכן לפוסטים, דפי נחיתה ו‑Canva.
          </p>
          <!-- [Genie Marketing Injection] הוסר כרטיס מידע כללי לבקשת המשתמש – נשארות רק תצוגות חיות -->
          
          <!-- [Genie Marketing Injection] תצוגות לדוגמה בתוך מאגר המדיה – נוסף לבקשת המשתמש להצגת מדיה בפועל -->
          <div class="glass-card-grid" id="media-library-previews">
            <div class="glass-card">
              <h3 class="card-title">תמונה לדוגמה (Pixabay)</h3>
              <p class="card-text">תצוגה חיה של תמונה לדוגמה. להורדה/צפייה בקישור המקורי לחצו "פתח תמונה".</p>
              <div class="media-thumb" style="border-radius:12px;">
                <!-- [Genie] עדכון קישור תמונה לדוגמה לפי בקשת המשתמש -->
                <img src="https://pixabay.com/get/g9f3e6d3fccf45e3ea545324811b620cbf1510718e544c646da06cf4f491258dda6ec859e133530f032e12d2aaa2a3e0c_640.jpg" alt="תמונה לדוגמה מפיקסביי" style="width:100%; max-width:100%; height:auto; display:block; border-radius:12px;">
              </div>
              <p class="card-text" style="margin-top:8px;">מקור: Pixabay. שימוש כפוף לרישוי Pixabay.</p>
              <div class="card-actions">
                <!-- [Genie] עדכון קישור כפתור "פתח תמונה" לאותה הכתובת החדשה -->
                <a href="https://pixabay.com/get/g9f3e6d3fccf45e3ea545324811b620cbf1510718e544c646da06cf4f491258dda6ec859e133530f032e12d2aaa2a3e0c_640.jpg" target="_blank" rel="noopener" class="btn-holo">פתח תמונה</a>
              </div>
            </div>
            <div class="glass-card">
              <h3 class="card-title">וידאו לדוגמה (Pixabay)</h3>
              <p class="card-text">תצוגה חיה של וידאו לדוגמה. הווידאו פועל מיד (ללא קול) לצורך הדגמה.</p>
              <div class="media-thumb" style="border-radius:12px; background:#000;">
                <!-- מציגים וידאו בפועל (ללא תמונת poster), כולל הפעלה אוטומטית בלולאה ומיוט כדי לאפשר autoplay בדפדפנים -->
                <video src="https://cdn.pixabay.com/video/2018/09/24/18400-291585376_large.mp4" controls autoplay muted loop preload="auto" playsinline style="width:100%; height:auto; display:block; border-radius:12px;"></video>
              </div>
              <p class="card-text" style="margin-top:8px;">מקור: Pixabay. שימוש כפוף לרישוי Pixabay.</p>
              <div class="card-actions">
                <a href="https://cdn.pixabay.com/video/2018/09/24/18400-291585376_large.mp4" target="_blank" rel="noopener" class="btn-holo">פתח וידאו</a>
              </div>
            </div>
          </div>
          <p class="card-text" style="margin-top:10px; text-align:right; color:#aab;">שימוש מסחרי לרוב מותר בהתאם לרישוי המקור (Pexels/Unsplash/Pixabay). ודאו שאין דמויות מזוהות/לוגואים/מותגים קנייניים בפריט הספציפי.</p>
        </section>
        
        <!-- [Genie Marketing Injection] media-examples הוסר לבקשת המשתמש -->

        <section id="audiences" class="section">
          <h2 class="section-title">למי זה מתאים</h2>
          <div class="glass-card-grid">
            <div class="glass-card">
              <div class="card-icon">👨‍👩‍👧</div>
              <h3 class="card-title">הורים ותלמידים</h3>
              <p class="card-text">הסברים ברורים, תרגול מיידי וסיוע בעבודות — ב‑WhatsApp, בלי אפליקציות נוספות.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">🏪</div>
              <h3 class="card-title">עסקים קטנים / משווקים</h3>
              <p class="card-text">קופי חד, רעיונות לקמפיינים ומדיה חוקית — להפקה מהירה של נכסים שיווקיים.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">🎯</div>
              <h3 class="card-title">יוצרים ועצמאים</h3>
              <p class="card-text">סיעור מוחות וניסוחים חכמים, עם תמונות/וידאו לשימוש מותר — בלי עקומת למידה.</p>
            </div>
          </div>
        </section>

        <section id="pricing" class="section">
          <h2 class="section-title">תמחור שקוף. בלי אותיות קטנות.</h2>
          <div class="glass-card-grid">
            <div class="glass-card">
              <div class="card-icon">💳</div>
              <h3 class="card-title">199₪ לשנה</h3>
              <p class="card-text">פחות מ‑17₪ לחודש. ניסיון חינם בקבוצת ה‑WhatsApp — ללא כרטיס אשראי וללא התחייבות.</p>
              <ul class="use-case-list">
                <li>שימוש חופשי בשאלות @ ללמידה וקופי.</li>
                <li>בקשות מדיה ! מתואמות רישוי למגוון שימושים.</li>
                <li>תואם פוסטים, דפי נחיתה ו‑Canva.</li>
              </ul>
              <div class="card-actions">
                <a href="#" class="btn-holo btn-large" aria-disabled="true">הצטרפות לניסיון בוואטסאפ</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" class="section">
          <h2 class="section-title">שאלות נפוצות</h2>
          <div class="glass-card-grid">
            <div class="glass-card">
              <div class="card-icon">🚀</div>
              <h3 class="card-title">איך מתחילים?</h3>
              <p class="card-text">מצטרפים לקבוצת ה‑WhatsApp להתנסות, מקבלים הנחיות קצרות ומתחילים לשאול עם @. למדיה: מתחילים ב‑!</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">⚖️</div>
              <h3 class="card-title">שימוש מסחרי במדיה</h3>
              <p class="card-text">ברוב המקרים מותר בהתאם לרישוי המקור (Pexels/Unsplash/Pixabay). יש לוודא היעדר דמויות מזוהות/לוגואים/מותגים מוגנים.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">🔒</div>
              <h3 class="card-title">פרטיות</h3>
              <p class="card-text">השימוש מתבצע בקבוצת WhatsApp. אין שיתוף תוכן מחוץ לקבוצה.</p>
            </div>
            <div class="glass-card">
              <div class="card-icon">✅</div>
              <h3 class="card-title">עלויות נסתרות</h3>
              <p class="card-text">אין. 199₪ לשנה וזה הכול.</p>
            </div>
          </div>
        </section>
      </div>
    `;

    // מציאת נקודת ההזרקה: לפני #cta אם קיים, אחרת בסוף <main>
    const cta = document.getElementById('cta');
    const target = cta || document.querySelector('main');
    if (!target) return; // אין לאן להזריק

    if (cta) {
      // הזרקה לפני בלוק ה-CTA הקיים
      cta.insertAdjacentHTML('beforebegin', html);
    } else {
      // אם אין CTA, נצרף לסוף ה-main
      target.insertAdjacentHTML('beforeend', html);
    }
  }

  // פונקציית onReady מרכזית כדי להריץ את סבב ההדגמות + הזרקה שיווקית יחד
  function onReady(){
    initRotator();
    injectMarketingSections();
  }

  // הפעלה בעת טעינת הדף
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
