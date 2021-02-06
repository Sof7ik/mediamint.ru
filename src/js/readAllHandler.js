export default function (elem, textElement)
{
    function showText (e, textElem)
    {
        textElem.style.maxHeight = 'max-content';
        e.currentTarget.textContent = 'свернуть';
        e.currentTarget.removeEventListener('click', function (e) {showText(e, textElement)});
        e.currentTarget.addEventListener('click', function (e) {hideText(e, textElement, 268)});
    }

    function hideText(e, textElem, maxHeight = '')
    {
        textElem.style.maxHeight = maxHeight + 'px';
        e.currentTarget.textContent = 'читать всё';
        e.currentTarget.removeEventListener('click', function (e) {hideText(e, textElement, 268)});
        e.currentTarget.addEventListener('click', function (e) {showText(e, textElement)});
    }

    elem.addEventListener('click', function (e) {showText(e, textElement)});
}