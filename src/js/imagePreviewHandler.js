const imageHandler = (images) => {
    const changeImage = e => {
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
}

export default imageHandler;