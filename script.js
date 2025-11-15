// =============================================================
// ПРОВЕРКА ЗАГРУЗКИ jQuery
// =============================================================

$(document).ready(function () {
    console.log('jQuery готов к работе!');
    $('body').css('background-color', '#f9f9f9');

    // --- Варианты на jQuery (рабочие) ---
    initJQueryTabs();
    initJQuerySmoothScroll();
    initJQueryQuote();
    initJQueryUI();
    initJQueryGallery();
});

// Если хочешь протестировать варианты на чистом JS,
// можешь раскомментировать вызовы ниже:

document.addEventListener('DOMContentLoaded', () => {
    // initVanillaTabs();
    // initVanillaSmoothScroll();
    // initVanillaQuote();
    // initVanillaGallery();
});

// =============================================================
// ЗАДАЧА A: ВКЛАДКИ — jQuery
// =============================================================

function initJQueryTabs() {
    console.log('Инициализация вкладок (jQuery)');
    $('.tab-btn').click(function () {
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');

        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });
}

// --- Вкладки на чистом JS (Vanilla) ---
function initVanillaTabs() {
    console.log('Инициализация вкладок (Vanilla JS)');
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');

            const tabId = btn.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// =============================================================
// ЗАДАЧА B: ПЛАВНАЯ ПРОКРУТКА — jQuery
// =============================================================

function initJQuerySmoothScroll() {
    console.log('Инициализация плавной прокрутки (jQuery)');
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();

        const target = $($(this).attr('href'));
        if (!target.length) return;

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
    });
}

// --- Плавная прокрутка на чистом JS ---
function initVanillaSmoothScroll() {
    console.log('Инициализация плавной прокрутки (Vanilla JS)');
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// =============================================================
// ЗАДАЧА C: AJAX ЦИТАТА — jQuery
// =============================================================

function initJQueryQuote() {
    console.log('Инициализация AJAX (jQuery)');
    $('#loadQuote').click(function () {
        $('#quote p').text('Загрузка...');
        $('#quote cite').text('');

        $.get('http://api.quotable.io/random', function (data) {
            $('#quote p').text(data.content);
            $('#quote cite').text(data.author);
        }).fail(function () {
            $('#quote p').text('Не удалось загрузить цитату.');
            $('#quote cite').text('');
        });
    });
}

// --- AJAX на чистом JS (fetch + then) ---
function initVanillaQuote() {
    console.log('Инициализация AJAX (Vanilla JS)');
    const btn = document.getElementById('loadQuote');
    const quoteP = document.querySelector('#quote p');
    const quoteCite = document.querySelector('#quote cite');

    if (!btn || !quoteP || !quoteCite) return;

    btn.addEventListener('click', () => {
        quoteP.textContent = 'Загрузка...';
        quoteCite.textContent = '';

        fetch('http://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                quoteP.textContent = data.content;
                quoteCite.textContent = data.author;
            })
            .catch(() => {
                quoteP.textContent = 'Не удалось загрузить цитату.';
                quoteCite.textContent = '';
            });
    });
}

// =============================================================
// ЗАДАЧА D: jQuery UI — draggable + datepicker
// =============================================================

function initJQueryUI() {
    console.log('Инициализация jQuery UI');
    $('#draggable').draggable();
    $('#datepicker').datepicker();
}

// =============================================================
// ГАЛЕРЕЯ С ЭФФЕКТАМИ — jQuery
// =============================================================

function initJQueryGallery() {
    console.log('Инициализация галереи (jQuery)');
    let current = 0;
    const $items = $('.gallery-item');

    function show(index) {
        $items.removeClass('active').css('opacity', 0);
        $items.eq(index).addClass('active').css('opacity', 1);
    }

    $('#nextImg').click(function () {
        current = (current + 1) % $items.length;
        show(current);
    });

    $('#prevImg').click(function () {
        current = (current - 1 + $items.length) % $items.length;
        show(current);
    });

    show(current);
}

// --- Галерея на чистом JS ---
function initVanillaGallery() {
    console.log('Инициализация галереи (Vanilla JS)');
    const items = document.querySelectorAll('.gallery-item');
    const btnNext = document.getElementById('nextImg');
    const btnPrev = document.getElementById('prevImg');

    if (!items.length || !btnNext || !btnPrev) return;

    let current = 0;

    function show(index) {
        items.forEach(img => {
            img.classList.remove('active');
            img.style.opacity = 0;
        });
        items[index].classList.add('active');
        items[index].style.opacity = 1;
    }

    btnNext.addEventListener('click', () => {
        current = (current + 1) % items.length;
        show(current);
    });

    btnPrev.addEventListener('click', () => {
        current = (current - 1 + items.length) % items.length;
        show(current);
    });

    show(current);
}
