/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


const getPriceBtn = document.getElementById('getPrice');
const askQuestionBtn = document.getElementById('askQuestion');
const previewImage = document.getElementById('current-preview');
getPriceBtn.addEventListener('click', _modalHandler__WEBPACK_IMPORTED_MODULE_0__.default);
askQuestionBtn.addEventListener('click', _modalHandler__WEBPACK_IMPORTED_MODULE_0__.default);
previewImage.addEventListener('click', _imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__.scalePreviewImage);
(0,_imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__.default)(document.querySelectorAll('.product-photos .mini img'));

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const modalWindowElem = document.getElementById('modal-window');

const modalHandler = e => {
  const formHandler = (event, formData) => {
    const item = event.currentTarget.name;

    if (formData.hasOwnProperty(item)) {
      formData[item] = event.currentTarget.value;
    }
  };

  const checkData = inputElem => {
    return inputElem.value.trim() !== '';
  };

  const sendData = (e, data, ...elementsToCheck) => {
    e.preventDefault();
    let sendDecision = !elementsToCheck.map(item => checkData(item)).includes(false);

    if (sendDecision) {
      for (const formItem in data) {
        if (data.hasOwnProperty(formItem)) {
          if (data[formItem].trim() !== '') {
            console.log(`${formItem}: ${data[formItem]}`);
          }
        }
      }
    } else {
      confirm('Заполните все поля');
      throw new Error('Заполните поля!');
    }
  };

  const closeModal = e => {
    document.getElementById('modal-name').removeEventListener('input', e => formHandler(e, form));
    document.getElementById('modal-tel').removeEventListener('input', e => formHandler(e, form));
    document.getElementById('modal-comment').removeEventListener('input', e => formHandler(e, form));
    document.getElementById('modal-submit').removeEventListener('click', e => sendData(e, form));
    document.getElementById('close-modal').removeEventListener('click', closeModal);
    modalWindowElem.removeEventListener('click', e => {
      if (e.currentTarget === e.target) closeModal();
    });
    document.getElementById('modal-comment').style.display === 'block' ? 'none' : 'none';
    modalWindowElem.style.display = 'none';
  };

  const form = {
    name: '',
    tel: '',
    question: ''
  };
  let modalNameElem, modalTelElem, modalQuestionElem;
  modalWindowElem.style.display = 'block';
  const modalType = parseInt(e.currentTarget.dataset.modaltype); // Тип модалки. 1 - "Узнать цену" (2 инпута), 2 - "Задать вопрос" (3 инпута)

  if (modalType === 2) {
    // Поле для вопроса становится видимым.
    document.getElementById('modal-comment').style.display = 'block';
    modalQuestionElem = document.getElementById('modal-comment');
    modalQuestionElem.addEventListener('input', e => formHandler(e, form));
    document.getElementById('modal-submit').value = 'задать вопрос';
  }

  modalNameElem = document.getElementById('modal-name');
  modalTelElem = document.getElementById('modal-tel');
  modalNameElem.addEventListener('input', e => formHandler(e, form));
  modalTelElem.addEventListener('input', e => formHandler(e, form));
  document.getElementById('modal-submit').addEventListener('click', e => {
    if (modalType === 1) {
      sendData(e, form, modalNameElem, modalTelElem);
    } else {
      sendData(e, form, modalNameElem, modalTelElem, modalQuestionElem);
    }
  });
  document.getElementById('close-modal').addEventListener('click', closeModal);
  modalWindowElem.addEventListener('click', e => {
    if (e.currentTarget === e.target) closeModal();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHandler);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scalePreviewImage": () => /* binding */ scalePreviewImage,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const imageHandler = images => {
  const changeImage = e => {
    let tempSrc;
    let clickedImage = e.currentTarget;
    let previewImage = document.getElementById('current-preview');
    tempSrc = clickedImage.src;
    clickedImage.setAttribute('src', previewImage.src);
    previewImage.setAttribute('src', tempSrc);
  };

  images.forEach(item => item.addEventListener('click', changeImage));
};

const scalePreviewImage = e => {
  e.currentTarget.classList.toggle('scaled');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageHandler);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;