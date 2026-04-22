// تبديل التابات
const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// زر النسخ
const copyBtns = document.querySelectorAll('.copy-btn');
copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        navigator.clipboard.writeText(code).then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'تم النسخ ✓';
            btn.style.background = '#2ea043';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#21262d';
            }, 1500);
        });
    });
});