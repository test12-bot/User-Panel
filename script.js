// --- 1. توليد خلفية الطعام المتحركة ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bg-pattern');
    const icons = [
        'fa-pizza-slice', 'fa-burger', 'fa-mug-hot', 'fa-utensils', 
        'fa-ice-cream', 'fa-drumstick-bite', 'fa-bowl-food', 'fa-carrot'
    ];
    
    // إنشاء 20 أيقونة عشوائية
    for(let i=0; i<20; i++) {
        const icon = document.createElement('i');
        icon.className = `fa-solid ${icons[Math.floor(Math.random() * icons.length)]} food-icon`;
        
        // مواقع وأحجام عشوائية
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = Math.random() * 100 + '%';
        icon.style.fontSize = (Math.random() * 2 + 1) + 'rem'; // حجم بين 1 و 3
        icon.style.animationDuration = (Math.random() * 10 + 10) + 's'; // سرعة بين 10 و 20 ثانية
        icon.style.animationDelay = (Math.random() * 5) + 's';

        container.appendChild(icon);
    }
});

// --- 2. منطق التطبيق (نفس المنطق السابق) ---
const WHATSAPP_NUMBER = "962791819432";

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
    {n:"ماخص", p:"4.00"}, {n:"دوار صويلح", p:"3.50"}, {n:"عين الباشا", p:"3.00"},
    {n:"جامعة البلقاء التطبيقية", p:"3.50"}
];

const prices_salt_sarou = [
    {n:"ضاحية الزهور", p:"1.50"}, {n:"دبابنة", p:"1.50"}, {n:"بركة العامرية", p:"1.50"},
    {n:"نقب الدبور العلوي", p:"2.00"}, {n:"نقب الدبور السفلي", p:"2.50"}, {n:"الدفاع المدني", p:"2.00"},
    {n:"البقعان", p:"2.00"}, {n:"إسكان المهندسين", p:"2.00"}, {n:"البحيرة", p:"2.00"},
    {n:"دوار الصوارفة", p:"2.00"}, {n:"السلالم", p:"2.00"}, {n:"وادي الشجرة", p:"2.00"},
    {n:"وسط البلد", p:"2.50"}, {n:"الميدان", p:"2.50"}, {n:"شارع الخضر", p:"2.50"},
    {n:"ام عطية", p:"2.50"}, {n:"الخندق", p:"2.50"}, {n:"الصوانية", p:"2.50"},
    {n:"وادي الأكراد", p:"2.50"}, {n:"العيزرية", p:"2.50"}, {n:"وادي الريح", p:"2.50"},
    {n:"الصافح", p:"2.50"}, {n:"ابو القيقب", p:"2.50"}, {n:"المدينة الرياضية", p:"2.50"},
    {n:"شارع الستين", p:"2.50"}, {n:"المغاريب", p:"3.00"}, {n:"البقيع", p:"2.50"},
    {n:"إسكان الفردوس", p:"3.00"}, {n:"ابو الردا", p:"3.00"}, {n:"ام الزيتونة", p:"3.50"},
    {n:"الطرازين", p:"3.50"}, {n:"القسام", p:"3.00"}, {n:"بطنا", p:"3.50"},
    {n:"عيرا", p:"5.00"}, {n:"يرقا", p:"5.00"}, {n:"مدرسة السلط الثانوية", p:"2.50"},
    {n:"المنشية", p:"2.50"}, {n:"الميامين", p:"3.00"}, {n:"جسر المناصير", p:"2.50"},
    {n:"طباعة العواملة", p:"2.50"}, {n:"زي", p:"3.50"}, {n:"علان", p:"4.00"},
    {n:"ام جوزة", p:"4.50"}, {n:"الرميمين", p:"5.00"}, {n:"كفر هودا", p:"3.50"},
    {n:"الصبيحي", p:"5.00"}, {n:"ام العمد", p:"4.00"}, {n:"الزعتري", p:"2.00"},
    {n:"اليزيدية", p:"1.50"}, {n:"المضري", p:"2.50"}, {n:"دعم الغزالات", p:"3.00"},
    {n:"سلعوف", p:"3.50"}, {n:"الوسية", p:"3.00"}, {n:"جلعاد", p:"5.00"},
    {n:"الميسة", p:"2.00"}, {n:"حدائق ابو حسان", p:"3.00"}, {n:"وادي السلط", p:"3.00"},
    {n:"وادي الشعيب التنقية", p:"3.50"}, {n:"وادي الشعيب الفحيص", p:"4.00"}, {n:"وادي الشعيب المقام", p:"5.00"},
    {n:"وادي الشعيب الكنايات", p:"5.00"}, {n:"ترخيص السلط", p:"1.00"},
    {n:"جامعة عمان الأهلية", p:"1.00"}, {n:"السرو الجنوبي", p:"1.50"},
    {n:"السرو الجمارك", p:"1.50"}, {n:"السرو إسكان طيبة", p:"1.50"}, {n:"إسكان آسيا", p:"2.00"},
    {n:"السرو حي السميرات", p:"2.00"}, {n:"السرو الفروسية", p:"2.00"}, {n:"السرو الجيعة", p:"2.00"},
    {n:"ام نعاج", p:"1.50"}, {n:"دوار الكمالية الحمر", p:"2.00"}, {n:"الفحيص", p:"3.00"},
    {n:"ماحص", p:"3.50"}, {n:"دوار صويلح", p:"3.50"}, {n:"عين الباشا", p:"3.00"},
    {n:"جامعة البلقاء التطبيقة", p:"3.00"}
];

const prices_amman = [
    {n:"الجبيهة", p:"4.00"}, {n:"ابو نصير", p:"5.00"}, {n:"شارع الأردن", p:"5.50"},
    {n:"شارع الجامعة", p:"5.00"}, {n:"دوار الواحة", p:"5.00"}, {n:"دابوق", p:"4.00"},
    {n:"خلدا", p:"4.00"}, {n:"الجاردنز", p:"5.00"}, {n:"دوار الداخلية", p:"6.00"},
    {n:"الدوار الثامن", p:"5.00"}, {n:"الدوار السابع", p:"5.50"}, {n:"الدوار السادس", p:"6.00"},
    {n:"تلاع العلي", p:"6.00"}
];

let currentRegion = '';
let currentStartPoint = '';
let currentList = [];
let lastOrderContext = {}; // لتخزين بيانات الطلب عند فتح المودال (مصدر الطلب، الوجهة، السعر، الخ)

function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setRegion(region) {
    currentRegion = region;
    navigateTo('start-point-page');
}

function selectStartPoint(point) {
    currentStartPoint = point;
    generateList();
    navigateTo('list-page');
}

function directCallCaptain() {
    // لم يعد يستعمل مباشرة؛ استبدلنا بالسلوك الجديد openOrderModal('direct')
    openOrderModal('direct');
}

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
    renderList(currentList);
}

function renderList(list) {
    const container = document.getElementById('prices-container');
    container.innerHTML = '';
    
    let startPointName = (currentStartPoint === 'umm_naaj') ? "أم النعاج" : "السرو";
    if(currentRegion === 'amman') startPointName += " (عمان)";

    list.forEach(item => {
        let note = '';
        if(item.n.includes('جامعة')) {
            note = '<span class="uni-note">يضاف 0.50 دينار لدخول الجامعة</span>';
        }

        const el = document.createElement('div');
        el.className = 'price-list-item';
        el.onclick = () => openOrderModal('list', { area: item.n, price: item.p, startPoint: startPointName });
        el.innerHTML = `
            <div style="flex-grow:1">
                <div class="item-name">${item.n}</div>
                ${note}
            </div>
            <div class="item-price">${item.p}</div>
        `;
        container.appendChild(el);
    });
}

function filterList() {
    const query = document.getElementById('searchInputs').value.toLowerCase();
    const filtered = currentList.filter(item => item.n.toLowerCase().includes(query));
    renderList(filtered);
}

/* ---------- ميزة المودال لملء تفاصيل الطلب (مضاف) ---------- */

/**
 * openOrderModal(source, context)
 * source: 'list' | 'calc' | 'direct'
 * context: عند 'list' -> {area, price, startPoint}
 *          عند 'calc' -> (يتم أخذ المسافة والسعر من الحاسبة)
 *          عند 'direct' -> استدعاء فوري (لا يوجد منطقة محددة)
 */
function openOrderModal(source, context = {}) {
    // حفظ السياق لوقت الإرسال
    lastOrderContext = { source, ...context };

    // ملأ الحقول المبدئية
    const phoneEl = document.getElementById('orderPhone');
    const valueEl = document.getElementById('orderValue');
    const notesEl = document.getElementById('orderNotes');

    phoneEl.value = WHATSAPP_NUMBER; // القيمة الافتراضية رقم الشركة (يمكن تغييره)
    valueEl.value = ''; // افتراضي فارغ (اختياري)
    notesEl.value = '';

    // إذا كان المصدر 'calc' نحسب السعر التقديري ونضعه في قيمة الطلب كمقترح
    if(source === 'calc') {
        const dist = parseFloat(document.getElementById('distanceInput').value);
        if(!isNaN(dist)) {
            const total = (dist * 0.30) + 1.00;
            // نعرضه كمقترح في حقل قيمة الطلب (اختياري للمستخدم)
            valueEl.value = total.toFixed(2);
        }
    }

    // إذا كان المصدر 'list' ونوجد سعر، نملأ حقل قيمة الطلب باقتراح السعر (اختياري)
    if(source === 'list' && context.price) {
        valueEl.value = context.price;
    }

    // إظهار المودال
    const modal = document.getElementById('order-modal');
    modal.style.display = 'flex';
}

function closeOrderModal(e) {
    if (e && e.target && e.target.id === 'order-modal') {
        // clicked on backdrop
        document.getElementById('order-modal').style.display = 'none';
    } else if (!e) {
        // تم الضغط على زر إلغاء
        document.getElementById('order-modal').style.display = 'none';
    }
}

// إغلاق المودال عند النقر خارجه (تم التعامل في HTML بإيقاف انتشار الحدث)
function closeOrderModalManual() {
    document.getElementById('order-modal').style.display = 'none';
}

// ربط زر الإرسال: إنشاء رسالة بصيغة الواتساب مع الحقول الإضافية
function sendOrderWhats() {
    const phoneRaw = document.getElementById('orderPhone').value.trim();
    let phone = phoneRaw.replace(/\D+/g, ''); // إزالة أي حروف أو رموز
    if(!phone) {
        alert('من فضلك أدخل رقم الهاتف المستلم (مع رمز البلد بدون +).');
        return;
    }

    // بناء نص الرسالة حسب السياق الأخير
    const ctx = lastOrderContext || {};
    let msgLines = [];
    msgLines.push('مرحباً HIGHWAY Delivery، لدي طلب كابتن:');

    if(ctx.source === 'list') {
        const sp = ctx.startPoint || '';
        if(sp) msgLines.push(`- نقطة البدء: ${sp}`);
        if(ctx.area) msgLines.push(`- الوجهة: ${ctx.area}`);
        if(ctx.price) msgLines.push(`- السعر: ${ctx.price} دينار`);
    } else if(ctx.source === 'calc') {
        const dist = parseFloat(document.getElementById('distanceInput').value);
        const computed = (!isNaN(dist)) ? ((dist * 0.30) + 1.00).toFixed(2) : null;
        msgLines.push(`- نوع الطلب: حساب بالكيلو`);
        if(!isNaN(dist)) msgLines.push(`- المسافة: ${dist} كم`);
        if(computed) msgLines.push(`- السعر التقديري: ${computed} دينار`);
    } else if(ctx.source === 'direct') {
        msgLines.push(`- نوع الطلب: استدعاء فوري`);
    }

    // حقل قيمة الطلب (اختياري)
    const orderValue = document.getElementById('orderValue').value.trim();
    if(orderValue) {
        msgLines.push(`- قيمة الطلب: ${orderValue} دينار`);
    }

    // حقل الملاحظات (اختياري)
    const notes = document.getElementById('orderNotes').value.trim();
    if(notes) {
        msgLines.push(`- ملاحظات: ${notes}`);
    }

    msgLines.push('شكراً.');

    const fullMsg = encodeURIComponent(msgLines.join('%0A').replace(/%0A/g, '%0A'));

    // بناء رابط wa.me
    // wa.me requires number without plus sign and no leading zeros for country code
    // We assume user entered number with country code (like 9627xxxxxxx), so just use it:
    const waUrl = `https://wa.me/${phone}?text=${fullMsg}`;

    // فتح الرابط في نافذة جديدة
    window.open(waUrl, '_blank');

    // غلق المودال
    document.getElementById('order-modal').style.display = 'none';
}

/* --- الدوال الأصلية الأخرى مع تعديلات طفيفة لعدم كسر السلوك --- */

function orderArea(area, price, startPoint) {
    // لم يعد يرسل مباشرة؛ الآن يفتح مودال مع تمرير السياق
    openOrderModal('list', { area: area, price: price, startPoint: startPoint });
}

function calculateTotal() {
    const dist = parseFloat(document.getElementById('distanceInput').value);
    const resDisplay = document.getElementById('calcResult');
    if(isNaN(dist) || dist < 0) {
        resDisplay.innerHTML = '0.00 <span style="font-size:1.5rem">JOD</span>';
        return;
    }
    const total = (dist * 0.30) + 1.00;
    resDisplay.innerHTML = total.toFixed(2) + ' <span style="font-size:1.5rem">JOD</span>';
}

function orderViaCalc() {
    // لم يعد يستخدم مباشرة؛ تم استبداله بفتح المودال من الزر في HTML
    openOrderModal('calc');
}

function showConstruction() {
    document.getElementById('construction-modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('construction-modal').style.display = 'none';
}
}
