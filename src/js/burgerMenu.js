export default function burgerMenuHandler(burgerMenuElem, classToToggle, buttonToOpenClose)
{
    const openCloseMenu = (e) =>
    {
        burgerMenuElem.classList.toggle(classToToggle);
    }

    buttonToOpenClose.addEventListener('click', openCloseMenu)
}