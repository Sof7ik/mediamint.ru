Тестовое задание в компанию [MediaMint](https://mediamint.ru)

![Логотип](./readme%20imgs/logo.svg)
___

# Карточка товара в магазине Металломер
**[Металломер](http://metallomer.ru/, "ООО НПО «Металломер»")** предлагает новейший, систематизированный ассортимент 
продуктов для программ по металлографи и петрографии,гистологии и предоставляет высококачественные разработки для любых 
целей.

Компания ООО НПО «Металломер» является первой в России компанией, которая целенаправленно занимается производством и 
поставкой полного спектра высококачественных расходных материалов для пробоподготовки (металлографии, петрографии, 
гистологии, оптики и т.п.).
___

## Исользуемые технологии
1. HTML/SASS (в синтаксисе SCSS)
2. JavaScript (ES6)
3. PWA (Progressive Web Apps)
4. Prepros (JS-сбощик & SCSS-компилятор)
5. Изобраения в формате WebP
___

## Функционал
* Поиск по сайту
* Меню для мобильных устройств
* Смена изображений в блоке с изображениями
* Открытие/закрытие модального окна
* Установка сайта в качестве приложения на рабочий стол (PWA)
___

## Скриншоты
### Общий вид сайта на компьютере
* Google Chrome<br>
![Google](./readme%20imgs/chrome%20desktop.png)<br><br>
* Microsoft Edge<br>
![MS Edge](./readme%20imgs/ms%20edge%20desktop.png)<br><br>
* Mozilla Firefox<br>
![Mozilla](./readme%20imgs/mozilla%20desktop.png)<br><br>

### Общий вид сайта на мобильных устройствах
* Google Chrome <br>
![Google](./readme%20imgs/chrome%20preview.png)<br><br>
* Microsoft Edge <br>
![MS Edge](./readme%20imgs/ms%20edge%20preview.png)<br><br>
* Mozilla Firefox <br>
![Mozilla](./readme%20imgs/mozilla%20preview.png)<br><br>


### Установка в качестве PWA
* Ярлык на рабочем столе Windows<br>
![Windows](./readme%20imgs/PWA%20shortcut%20Windows.png)<br><br>
* Ярлык на рабочем столе мобильного устройства <br>
![Mobile](./readme%20imgs/PWA%20mobile%20icon.png)<br><br>


###Скриншоты из PWA
* Microsoft Edge<br>
![Windows](./readme%20imgs/opening%20as%20PWA%20desktop.png)<br><br>
* Мобильное устройство<br>
![Mobile](./readme%20imgs/mobile.jpg)<br><br>

[Видео-демонстрация](https://yadi.sk/i/HwU5ojJ_HRDY0A, "Видео из PWA") UX в PWA с мобильного устройства
___

## LightHouse Audit
Аудит для мобильных устройств на примере Moto G4<br>
![Mobile Audit](./readme%20imgs/mobile%20lighthouse.png)<br><br>
Аудит для стационарных устройств<br>
![Mobile Audit](./readme%20imgs/desktop%20audit.png)<br><br>
Аудит Progressive Web Apps<br>
![Mobile Audit](./readme%20imgs/PWA.png)<br><br>

___
# Разработчикам
## JavaScript
Собран через Prepros с babel(target browsers: defaults) -> import/export -> minify в файл dist/main.js. Все 
исходные файлы и импортированы в файл **src/js/main.js**, который, в свою очередь, прогнался через Prepros
. Использовалось
объявление функций не в ES6 синтаксисе с целью оптимизации для IE11, но babel
 не смог. А переписывать было лень обратно на *const foo () => {}*.
## SCSS
Собран также через Prepros с AutoPrefixer -> Minify. Все исходые файлы импортированы в **src/styles/index.scss**, 
который прогоняется через Prepros в dist/index.css