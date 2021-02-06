export default function burgerMenuHandler(burgerMenuElem, classToToggle, buttonToOpenClose)
{
    function openCloseMenu (e)
    {
        burgerMenuElem.classList.toggle(classToToggle);
    }

    buttonToOpenClose.addEventListener('click', openCloseMenu)
}