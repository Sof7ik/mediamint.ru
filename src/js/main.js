import modalHandler from "./modalHandler";
import imageHandler, {scalePreviewImage} from "./imagePreviewHandler";
import readAll from './readAllHandler';
import sliderInitialization from './sliderInit';

const getPriceBtn = document.getElementById('getPrice');
const askQuestionBtn = document.getElementById('askQuestion');

// Обработчик превью картинки
if (document.getElementById('current-preview'))
{
    const previewImage = document.getElementById('current-preview');
    previewImage.addEventListener('click', scalePreviewImage);
}
// Обработчик превью картинки

// Читать больше
const readAllBtn = document.getElementById('readMoreProperties');
const propertiesText = document.getElementById('properties-text');
readAll(readAllBtn, propertiesText)
// Читать больше

// Модальное окно
getPriceBtn.addEventListener('click', modalHandler);
askQuestionBtn.addEventListener('click', modalHandler);
// Модальное окно

imageHandler(document.querySelectorAll('.product-photos .mini img'));

sliderInitialization();