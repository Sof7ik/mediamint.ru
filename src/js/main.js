import modalHandler from "./modalHandler";
import imageHandler, {scalePreviewImage} from "./imagePreviewHandler";
import sliderInitialization from './sliderInit';

const getPriceBtn = document.getElementById('getPrice');
const askQuestionBtn = document.getElementById('askQuestion');
const previewImage = document.getElementById('current-preview');

getPriceBtn.addEventListener('click', modalHandler);
askQuestionBtn.addEventListener('click', modalHandler);

previewImage.addEventListener('click', scalePreviewImage);

imageHandler(document.querySelectorAll('.product-photos .mini img'));

if (document.getElementById('slider'))
{
    sliderInitialization();
}