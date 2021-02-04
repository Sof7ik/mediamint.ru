const imageHandler = () => {
    const images = document.querySelectorAll('.product-photos .mini img');

    const changeImage = e => {
        console.log('Click to image');

        let tempSrc;

        let clickedImage = e.currentTarget;
        let previewImage = document.getElementById('current-preview');

        tempSrc = clickedImage.src;
        clickedImage.setAttribute('src', previewImage.src);
        previewImage.setAttribute('src', tempSrc);
    }

    images.forEach(item => item.addEventListener('click', changeImage));
}

export const scalePreviewImage = (e) => {
    e.currentTarget.classList.toggle('scaled');

    // if (e.currentTarget.style.transform === '' || e.currentTarget.style.transform === 'scale(1)')
    // {
    //     e.currentTarget.style.transform = 'scale(2)';
    // }
    // else
    // {
    //     e.currentTarget.style.transform = 'scale(1)';
    // }
}

export default imageHandler;