/* =========================================================
   HIGHWAY Delivery — قائمة الأسعار واستدعاء كابتن
   ========================================================= */

/* ---------- بيانات الأسعار ---------- */
const prices_salt_umm_naaj = [
    {n:"ضاحية الزهور", p:"2.00"}, {n:"دبابنة", p:"2.00"}, {n:"بركة العامرية", p:"2.00"},
    {n:"نقب الدبور العلوي", p:"2.50"}, {n:"نقب الدبور السفلي", p:"3.00"}, {n:"الدفاع المدني", p:"2.50"},
    {n:"البقعان", p:"2.50"}, {n:"إسكان المهندسين", p:"2.50"}, {n:"البحيرة", p:"2.50"},
    {n:"دوار الصوارفة", p:"2.50"}, {n:"السلالم", p:"2.50"}, {n:"وادي الشجرة", p:"2.50"},
    {n:"وسط البلد", p:"3.00"}, {n:"الميدان", p:"3.00"}, {n:"شارع الخضر", p:"3.00"},
    {n:"ام عطية", p:"3.00"}, {n:"الخندق", p:"3.00"}, {n:"الصوانية", p:"3.00"},
    {n:"وادي الأكراد", p:"3.00"}, {n:"العيزريه", p:"3.00"}, {n:"وادي الريح", p:"3.00"},
    {n:"الصافح", p:"3.00"}, {n:"ابو القيقب", p:"3.00"}, {n:"المدينة الرياضية", p:"3.00"},
    {n:"شارع الستين", p:"3.00"}, {n:"المغاريب", p:"3.50"}, {n:"البقيع", p:"3.00"},
    {n:"إسكان الفردوس", p:"3.50"}, {n:"ابو الردا", p:"3.50"}, {n:"ام الزيتونة", p:"4.00"},
    {n:"الطرازين", p:"4.00"}, {n:"القسام", p:"3.50"}, {n:"بطنا", p:"4.00"},
    {n:"عيرا", p:"5.00"}, {n:"يرقا", p:"5.00"}, {n:"مدرسة السلط الثانوية", p:"3.00"},
    {n:"المنشية", p:"3.00"}, {n:"الميامين", p:"3.50"}, {n:"جسر المناصير", p:"3.00"},
    {n:"طباعة العواملة", p:"3.00"}, {n:"زي", p:"4.00"}, {n:"علان", p:"4.50"},
    {n:"ام جوزة", p:"4.50"}, {n:"الرميمين", p:"5.00"}, {n:"كفر هودا", p:"4.00"},
    {n:"الصبيحي", p:"5.00"}, {n:"ام العمد", p:"4.50"}, {n:"الزعتري", p:"2.50"},
    {n:"اليزيديه", p:"2.00"}, {n:"المضري", p:"3.00"}, {n:"دعم الغزالات", p:"3.50"},
    {n:"سلعوف", p:"4.00"}, {n:"الوسية", p:"3.00"}, {n:"جلعاد", p:"5.00"},
    {n:"الميسة", p:"2.50"}, {n:"حدائق ابو حسان", p:"3.50"}, {n:"وادي السلط", p:"3.50"},
    {n:"وادي الشعيب التنقية", p:"4.00"}, {n:"وادي الشعيب الفحيص", p:"4.50"}, {n:"وادي الشعيب المقام", p:"5.00"},
    {n:"وادي الشعيب الكنايات", p:"5.00"}, {n:"ترخيص السلط", p:"1.50"},
    {n:"جامعة عمان الأهلية", p:"1.50"}, {n:"السرو الجنوبي", p:"2.00"},
    {n:"الجمارك", p:"2.00"}, {n:"إسكان طيبة", p:"2.00"}, {n:"إسكان آسيا", p:"2.50"},
    {n:"حي السميرات", p:"2.50"}, {n:"الفروسية", p:"2.50"}, {n:"الجيعة", p:"2.50"},
    {n:"ام نعاج", p:"1.50"}, {n:"دوار الكمالية الحمر", p:"2.00"}, {n:"الفحيص", p:"3.50"},
    {n:"ماحص", p:"4.00"}, {n:"دوار صويلح", p:"3.50"}, {n:"عين الباشا", p:"3.00"},
    {n:"جامعة البلقاء التطبيقية", p:"3.50"}
];

const prices_salt_sarou = [
    {n:"ضاحية الزهور", p:"1.50"}, {n:"دبابنة", p:"1.50"}, {n:"بركة العامرية", p:"2.00"},
    {n:"نقب الدبور العلوي", p:"2.50"}, {n:"نقب الدبور السفلي", p:"2.50"}, {n:"الدفاع المدني", p:"2.00"},
    {n:"البقعان", p:"2.00"}, {n:"إسكان المهندسين", p:"2.50"}, {n:"البحيرة", p:"2.50"},
    {n:"دوار الصوارفة", p:"2.50"}, {n:"السلالم", p:"2.50"}, {n:"وادي الشجرة", p:"2.00"},
    {n:"وسط البلد", p:"2.50"}, {n:"الميدان", p:"2.75"}, {n:"شارع الخضر", p:"2.75"},
    {n:"ام عطية", p:"3.00"}, {n:"الخندق", p:"3.00"}, {n:"الصوانية", p:"2.75"},
    {n:"وادي الأكراد", p:"3.00"}, {n:"العيزرية", p:"3.00"}, {n:"وادي الريح", p:"3.00"},
    {n:"الصافح", p:"3.00"}, {n:"ابو القيقب", p:"3.00"}, {n:"المدينة الرياضية", p:"3.00"},
    {n:"شارع الستين", p:"3.00"}, {n:"المغاريب", p:"3.00"}, {n:"البقيع", p:"3.00"},
    {n:"إسكان الفردوس", p:"3.00"}, {n:"ابو الردا", p:"3.00"}, {n:"ام الزيتونة", p:"4.00"},
    {n:"الطرازين", p:"4.00"}, {n:"القسام", p:"4.00"}, {n:"بطنا", p:"4.00"},
    {n:"عيرا", p:"5.00"}, {n:"يرقا", p:"5.00"}, {n:"مدرسة السلط الثانوية", p:"2.75"},
    {n:"المنشية", p:"3.00"}, {n:"الميامين", p:"3.00"}, {n:"جسر المناصير", p:"2.50"},
    {n:"طباعة العواملة", p:"3.00"}, {n:"زي", p:"4.00"}, {n:"علان", p:"5.00"},
    {n:"ام جوزة", p:"4.00-5.00"}, {n:"الرميمين", p:"5.00"}, {n:"كفر هودا", p:"5.00"},
    {n:"الصبيحي", p:"6.00-7.00"}, {n:"ام العمد", p:"5.00"}, {n:"الزعتري", p:"2.50"},
    {n:"اليزيدية", p:"1.50"}, {n:"المضري", p:"2.50"}, {n:"دعم الغزالات", p:"3.00-3.50"},
    {n:"سلعوف", p:"3.50"}, {n:"الوسية", p:"4.00"}, {n:"جلعاد", p:"6.00"},
    {n:"الميسة", p:"2.00"}, {n:"حدائق ابو حسان", p:"3.00"}, {n:"وادي السلط", p:"4.00-5.00"},
    {n:"وادي الشعيب التنقية", p:"4.00"}, {n:"وادي الشعيب الفحيص", p:"5.00"}, {n:"وادي الشعيب المقام", p:"5.00"},
    {n:"وادي الشعيب الكنايات", p:"5.00"}, {n:"ترخيص السلط", p:"1.50"},
    {n:"جامعة عمان الأهلية", p:"1.50"}, {n:"السرو الجنوبي", p:"1.50"},
    {n:"السرو الجمارك", p:"1.50"}, {n:"السرو إسكان طيبة", p:"1.50"}, {n:"إسكان آسيا", p:"2.00"},
    {n:"السرو حي السميرات", p:"2.00"}, {n:"السرو الفروسية", p:"2.00"}, {n:"السرو الجيعة", p:"2.00"},
    {n:"ام نعاج", p:"2.00"}, {n:"دوار الكمالية / الحمر", p:"2.00-2.50"}, {n:"الفحيص", p:"3.00"},
    {n:"ماحص", p:"3.50"}, {n:"دوار صويلح", p:"3.50"}, {n:"عين الباشا", p:"3.00"},
    {n:"جامعة البلقاء التطبيقة", p:"3.00"}
];

const prices_amman = [
    {n:"الجبيهة", p:"4.00"}, {n:"ابو نصير", p:"5.00"}, {n:"شارع الأردن", p:"5.50"},
    {n:"شارع الجامعة", p:"5.00"}, {n:"دوار الواحة", p:"5.00"}, {n:"دابوق", p:"4.00"},
    {n:"خلدا", p:"5.00"}, {n:"الجاردنز", p:"6.00"}, {n:"دوار الداخلية", p:"7.00"},
    {n:"الدوار الثامن", p:"6.00"}, {n:"الدوار السابع", p:"6.00"}, {n:"الدوار السادس", p:"7.00"},
    {n:"تلاع العلي", p:"5.00"}
];

/* ---------- الحالة ---------- */
let currentRegion = '';
let currentStartPoint = '';
let currentStartName = '';
let currentList = [];
let pendingOrderData = {};
let calcState = { dist: '', total: '0.00' };
let screenStack = ['screen-home'];

/* ---------- أيقونات الشاشة الافتتاحية (طعام) ---------- */
const FOOD_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11c0-3.5 3.6-6 8-6s8 2.5 8 6H4Z"/><path d="M3 14.5h18"/><path d="M5 17.5h14v.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C8 3 4.5 4.5 2.5 7L12 21 21.5 7C19.5 4.5 16 3 12 3Z"/><circle cx="10" cy="9" r="1.2"/><circle cx="14" cy="11" r="1.2"/><circle cx="12" cy="15" r="1"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3v2M11 3v2M14 3v2"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7a2 2 0 0 0 2 2v9"/><path d="M10 3v7a2 2 0 0 1-2 2"/><path d="M17 3c-2 1.5-3 4-3 7h3v11"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11a5 5 0 0 1 10 0"/><path d="M6.5 11h11L12 21 6.5 11Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'
];

function buildSplashIcons() {
    const wrap = document.getElementById('splashIcons');
    for (let i = 0; i < 18; i++) {
        const el = document.createElement('div');
        el.className = 'float-icon';
        const size = 26 + Math.random() * 34;
        el.style.width = el.style.height = size + 'px';
        el.style.left = (Math.random() * 94) + '%';
        el.style.animationDuration = (9 + Math.random() * 9) + 's';
        el.style.animationDelay = (-Math.random() * 14) + 's';
        el.innerHTML = FOOD_ICONS[i % FOOD_ICONS.length];
        wrap.appendChild(el);
    }
}

/* ---------- التنقل ---------- */
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.getElementById('headerBack').classList.toggle('show', id !== 'screen-home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goTo(id) {
    if (screenStack[screenStack.length - 1] !== id) screenStack.push(id);
    showScreen(id);
}

function goBack() {
    if (screenStack.length > 1) {
        screenStack.pop();
        showScreen(screenStack[screenStack.length - 1]);
    }
}

function resetAndGo(id) {
    screenStack = ['screen-home'];
    if (id !== 'screen-home') screenStack.push(id);
    showScreen(id);
}

function setRegion(region) {
    currentRegion = region;
    goTo('screen-start');
}

function selectStartPoint(point) {
    currentStartPoint = point;
    generateList();
    goTo('screen-list');
}

/* ---------- القائمة ---------- */
function generateList() {
    let rawList = [];
    if (currentRegion === 'salt') {
        if (currentStartPoint === 'umm_naaj') rawList = [...prices_salt_umm_naaj];
        else if (currentStartPoint === 'sarou') rawList = [...prices_salt_sarou];
    } else if (currentRegion === 'amman') {
        rawList = [...prices_amman];
    }
    rawList.sort((a, b) => a.n.localeCompare(b.n, 'ar'));
    currentList = rawList;

    currentStartName = (currentStartPoint === 'umm_naaj') ? "أم النعاج" : "السرو";
    if (currentRegion === 'amman') currentStartName += " (عمان)";

    const regionName = currentRegion === 'amman' ? 'مناطق عمان' : 'مناطق السلط';
    document.getElementById('listTitle').textContent = regionName;
    document.getElementById('listSub').textContent = 'نقطة الانطلاق: ' + currentStartName;
    document.getElementById('searchInput').value = '';
    renderList(currentList);
}

function renderList(list) {
    const container = document.getElementById('pricesContainer');
    container.innerHTML = '';

    if (!list.length) {
        container.innerHTML = '<div class="empty-state">لا توجد نتائج مطابقة</div>';
        return;
    }

    list.forEach(item => {
        const note = item.n.includes('جامعة')
            ? '<span class="uni-note">يضاف 0.50 دينار لدخول الجامعة</span>'
            : '';

        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'price-row';
        el.innerHTML = `
            <span class="nm">
                <span class="item-name">${item.n}</span>
                ${note}
            </span>
            <span class="item-price">${item.p}</span>
        `;
        el.addEventListener('click', () => {
            openOrderModal('area', { area: item.n, price: item.p, startPoint: currentStartName });
        });
        container.appendChild(el);
    });
}

function filterList() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    renderList(currentList.filter(item => item.n.toLowerCase().includes(query)));
}

/* ---------- الحاسبة ---------- */
function calculateTotal() {
    const input = document.getElementById('distanceInput');
    const resDisplay = document.getElementById('calcResult');
    const dist = parseFloat(input.value);

    document.getElementById('distanceField').classList.remove('invalid');

    if (isNaN(dist) || dist < 0) {
        calcState = { dist: '', total: '0.00' };
        resDisplay.innerHTML = '0.00 <small>JOD</small>';
        return;
    }
    const total = ((dist * 0.20) + 1.00).toFixed(2);
    calcState = { dist: input.value, total };
    resDisplay.innerHTML = total + ' <small>JOD</small>';
}

/* ---------- نافذة تفاصيل الطلب ---------- */
function openOrderModal(type, data = {}) {
    if (type === 'calc') {
        const dist = parseFloat(document.getElementById('distanceInput').value);
        if (isNaN(dist) || dist < 0) {
            document.getElementById('distanceField').classList.add('invalid');
            document.getElementById('distanceInput').focus();
            return;
        }
    }

    pendingOrderData = { type, ...data };
    document.getElementById('modalOrderValue').value = '';
    document.getElementById('modalOrderNotes').value = '';

    const summary = document.getElementById('modalSummary');
    if (type === 'area') {
        summary.style.display = 'flex';
        summary.innerHTML =
            `<span>من: ${data.startPoint}</span><span>إلى: ${data.area}</span><span>السعر: ${data.price} دينار</span>`;
    } else if (type === 'calc') {
        summary.style.display = 'flex';
        summary.innerHTML =
            `<span>المسافة: ${calcState.dist} كم</span><span>السعر التقديري: ${calcState.total} JOD</span>`;
    } else {
        summary.style.display = 'none';
        summary.innerHTML = '';
    }

    document.getElementById('orderModal').classList.add('show');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
}

function submitOrder() {
    const val = document.getElementById('modalOrderValue').value.trim() || "غير محدد";
    const notes = document.getElementById('modalOrderNotes').value.trim() || "لا يوجد";
    let baseMsg = "";
    let refText = "";

    if (pendingOrderData.type === 'direct') {
        baseMsg = `مرحباً، أود استدعاء كابتن من فضلك.`;
    } else if (pendingOrderData.type === 'area') {
        baseMsg = `مرحباً HIGHWAY Delivery، أريد طلب كابتن:\n- نقطة البدء: ${pendingOrderData.startPoint}\n- الوجهة: ${pendingOrderData.area}\n- السعر: ${pendingOrderData.price} دينار`;
        refText = `${pendingOrderData.startPoint} ← ${pendingOrderData.area}`;
    } else if (pendingOrderData.type === 'calc') {
        baseMsg = `مرحباً، طلب كابتن (حساب بالكيلو):\n- المسافة: ${calcState.dist} كم\n- السعر التقديري: ${calcState.total} JOD`;
        refText = `${calcState.dist} كم • ${calcState.total} JOD`;
    }

    const finalMsg = `${baseMsg}\n- قيمة الطلب: ${val}\n- ملاحظات: ${notes}`;
    const url = `https://wa.me/?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');

    closeOrderModal();

    const ref = document.getElementById('successRef');
    if (refText) {
        ref.textContent = refText;
        ref.style.display = 'inline-block';
    } else {
        ref.style.display = 'none';
    }
    goTo('screen-success');
}

/* ---------- نافذة قيد التجهيز ---------- */
function showConstruction() {
    document.getElementById('constructionModal').classList.add('show');
}
function closeConstruction() {
    document.getElementById('constructionModal').classList.remove('show');
}

/* ---------- تشغيل ---------- */
document.addEventListener('DOMContentLoaded', () => {
    buildSplashIcons();

    const splash = document.getElementById('splash');
    document.getElementById('enterBtn').addEventListener('click', () => {
        splash.classList.add('hide');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeOrderModal();
            closeConstruction();
        }
    });
});
