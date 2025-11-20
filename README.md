<img width="1906" height="910" alt="image" src="https://github.com/user-attachments/assets/7d079a09-6b95-465e-98bb-155ae3a9d259" />
<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/afbb8ea8-6086-49e2-b4b2-968150bc69a5" />
<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/7757423f-1fce-44ca-ae2e-cfc234db2e48" />

Ответы на вопросы:
Какие jQuery-функции использовались?
В работе использовались основные функции jQuery для работы с DOM и событиями:

1. $(document).ready() — ожидание полной загрузки DOM.
2. $('.tab-btn').click() — обработка кликов по вкладкам.
3. addClass() и removeClass() — смена активных элементов.
4. $('a[href^="#"]').click() — перехват переходов по якорям.
5. $('html, body').animate() — плавная анимация прокрутки.
6. $.get() — выполнение AJAX-запроса.
7. Методы jQuery UI: draggable() и datepicker() для сложных UI-элементов.
Эти функции позволили реализовать вкладки, прокрутку, загрузку цитат и элементы интерфейса с минимальным количеством кода.

Что показалось быстрее/проще — jQuery или чистый JS?

jQuery оказался быстрее и легче в написании:

1. короче селекторы: $('.item') против document.querySelector('.item');
2. события пишутся проще: .click() против addEventListener;
3. AJAX-запросы выполняются одной строкой ($.get), а в JS требуется цепочка fetch().then();
4. анимации прокрутки в jQuery встроенные, а в JS их нужно настраивать вручную.

Тем не менее, современный JavaScript стал гораздо ближе к jQuery-подходу и решает большинство задач нативно, особенно с querySelector, classList, fetch, scrollIntoView.

Что из этого вы бы оставили, если писали современный сайт?

Если делать современный сайт, я бы оставил:

1. Vanilla JS для вкладок, событий, скролла и AJAX — всё это сегодня делается нативно.
2. fetch + async/await вместо $.get().
3. scrollIntoView({ behavior: "smooth" }) вместо .animate().
4. classList вместо .addClass() и .removeClass().

Но я бы сохранил использование:

jQuery UI, если нужны быстрые компоненты вроде draggable() или datepicker() — их аналоги в чистом JS писать намного дольше.

Итог: jQuery остаётся удобным, но в современных проектах чаще выбирают чистый JavaScript + готовые UI-библиотеки.
