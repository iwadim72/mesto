(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._settings=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._settings.inputErrorClass),n.textContent=e,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._settings.inputErrorClass),e.classList.remove(this._settings.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likesCounter=e.likes,this._cardId=e._id,this._cardOwner=e.owner._id,this._userId=a,this._templateSelector=n,this._handleCardClick=r,this._addLike=i,this._removeLike=u,this._deleteCard=o}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".places__element").cloneNode(!0)}},{key:"_handleDeleteCard",value:function(){this._deleteCard()}},{key:"_handleSwitchLike",value:function(){var t=this;this._cardLike.classList.contains("places__like_active")?this._removeLike(this._cardId).then((function(e){t._cardLikesCounter.textContent=e.likes.length,t._cardLike.classList.remove("places__like_active")})).catch((function(t){console.log(t)})):this._addLike(this._cardId).then((function(e){t._cardLikesCounter.textContent=e.likes.length,t._cardLike.classList.add("places__like_active")})).catch((function(t){console.log(t)}))}},{key:"_setEventListeners",value:function(){var t=this;this._cardPhoto.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardLike.addEventListener("click",(function(){t._handleSwitchLike()})),this._buttonDeleteCard.addEventListener("click",(function(){t._handleDeleteCard()}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardPhoto=this._element.querySelector(".places__photo"),this._cardLike=this._element.querySelector(".places__like"),this._cardLikesCounter=this._element.querySelector(".places__like-counter"),this._buttonDeleteCard=this._element.querySelector(".places__delete"),this._cardOwner===this._userId&&(console.log("привет"),this._buttonDeleteCard.style.display="block"),this._setEventListeners(),this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._cardLikesCounter.textContent=this._likesCounter.length,this._likesCounter.length>0&&this._likesCounter.forEach((function(e){e._id===t._userId&&t._cardLike.classList.add("places__like_active")})),this._element.querySelector(".places__name").textContent=this._name,this._element}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickShadowClose",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var t=this,e=this._popup.querySelector(".popup__close");this._popup.addEventListener("click",(function(e){t._handleClickShadowClose(e)})),e.addEventListener("click",(function(){t.close()}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._popup.querySelectorAll(".popup__text-input"),n}return e=u,(n=[{key:"close",value:function(){f(y(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.getAttribute("name")]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;f(y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._popup.querySelector(".popup__submit");t._formSubmit(t._getInputValues(),n)}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var b=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){this._renderedItems.forEach(this._renderer)}},{key:"addItemToEnd",value:function(t){this._container.append(t)}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var g=function(){function t(e){var n=e.profileNameSelector,r=e.profileJobSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._job.textContent=t.about}},{key:"setAvatar",value:function(t){this._avatar.style.backgroundImage="url(".concat(t.avatar,")")}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._capture=e._popup.querySelector(".popup-photo__capture"),e._photoName=e._popup.querySelector(".popup-photo__capture-name"),e}return e=u,(n=[{key:"open",value:function(t,e){this._capture.src=e,this._capture.alt=t,this._photoName.textContent=t,w(j(u.prototype),"open",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfileInfo",value:function(){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"setProfileInfo",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t.name,about:t.job})}).then((function(t){return e._getResponseData(t)}))}},{key:"changeAvatar",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D,B,U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._subminBtn=n._popup.querySelector(".popup__submit"),n}return e=u,(n=[{key:"open",value:function(t,e){this._cardId=t,this.card=e,R(x(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;R(x(u.prototype),"setEventListeners",this).call(this),this._subminBtn.addEventListener("click",(function(){t._handleSubmit(t._cardId,t.card)}))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c),A=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),V=document.querySelector(".profile__avatar"),J=document.querySelector(".popup__text-input_content_name"),G=document.querySelector(".popup__text-input_content_job"),H=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"ed0399b7-ebdf-4a38-88ea-fec0aabc8446","Content-Type":"application/json"}}),z=new h(".profile-popup",(function(t,e){e.textContent="Сохранение...",H.setProfileInfo(t).then((function(t){W.setUserInfo(t),z.close()})).catch((function(t){console.log(t)})).finally((function(){e.textContent="Сохранить"}))})),M=new h(".popup_function_add-place",(function(t,e){e.textContent="Сохранение...",H.addNewCard(t).then((function(t){D.addItem(X(t)),M.close()})).catch((function(t){console.log(t)})).finally((function(){e.textContent="Сохранить"}))})),F=new h(".popup-avatar",(function(t,e){e.textContent="Сохранение...",H.changeAvatar(t).then((function(e){W.setAvatar(t),F.close()})).catch((function(t){console.log(t)})).finally((function(){e.textContent="Сохранить"}))})),K=new P(".popup-photo"),Q=new U(".popup-remove-card",(function(t,e){return H.deleteCard(t).then((function(t){return e.deleteCard(),Q.close(),t})).catch((function(t){console.log(t)}))})),W=new g({profileNameSelector:".profile__name",profileJobSelector:".profile__name-description",profileAvatarSelector:".profile__avatar"});function X(t){var e=t._id,n=new i(t,"#places-template",$,(function(){return function(t,e){Q.open(t,e)}(e,n)}),Y,Z,B);return n.generateCard()}function Y(t){return H.addLike(t).then((function(t){return t})).catch((function(t){console.log(t)}))}function Z(t){return H.removeLike(t).then((function(t){return t})).catch((function(t){console.log(t)}))}function $(t,e){K.open(t,e)}Promise.all([H.getProfileInfo(),H.getInitialCards()]).then((function(t){W.setUserInfo(t[0]),W.setAvatar(t[0]),B=t[0]._id;var e=new b({items:t[1],renderer:function(t){var n=X(t);e.addItemToEnd(n)}},".places__elements");e.renderItems(),D=e})).catch((function(t){console.log(t)})),z.setEventListeners(),M.setEventListeners(),K.setEventListeners(),F.setEventListeners(),Q.setEventListeners(),A.addEventListener("click",(function(){var t=W.getUserInfo();J.value=t.name,G.value=t.job,et["popup-profile"].resetValidation(),z.open()})),N.addEventListener("click",(function(){et["popup-add-place"].resetValidation(),M.open()})),V.addEventListener("click",(function(){et["popup-avatar"].resetValidation(),F.open()}));var tt,et={};tt={formSelector:".popup__form",inputSelector:".popup__text-input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(tt.formSelector)).forEach((function(t){var e=new n(tt,t),r=t.getAttribute("name");et[r]=e,e.enableValidation()}))})();