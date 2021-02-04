/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


const getPriceBtn = document.getElementById('getPrice');
const askQuestionBtn = document.getElementById('askQuestion');
const previewImage = document.getElementById('current-preview');
getPriceBtn.addEventListener('click', _modalHandler__WEBPACK_IMPORTED_MODULE_0__["default"]);
askQuestionBtn.addEventListener('click', _modalHandler__WEBPACK_IMPORTED_MODULE_0__["default"]);
previewImage.addEventListener('click', _imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__["scalePreviewImage"]);
Object(_imagePreviewHandler__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (modalHandler);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePreviewImage", function() { return scalePreviewImage; });
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
  };

  images.forEach(item => item.addEventListener('click', changeImage));
};

const scalePreviewImage = e => {
  e.currentTarget.classList.toggle('scaled'); // if (e.currentTarget.style.transform === '' || e.currentTarget.style.transform === 'scale(1)')
  // {
  //     e.currentTarget.style.transform = 'scale(2)';
  // }
  // else
  // {
  //     e.currentTarget.style.transform = 'scale(1)';
  // }
};
/* harmony default export */ __webpack_exports__["default"] = (imageHandler);

/***/ })
/******/ ]);