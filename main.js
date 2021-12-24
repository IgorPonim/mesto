(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r,o=this,i=e.data,a=e.template,u=e.handleCardClick,c=e.sendLike,s=e.deleteLike,l=e.id,f=e.deleteCards;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e){var t=e.likes;o._likes=t,o._amountOfLikes.textContent=o._likes.length,o._buttonLike.classList.toggle("element__reaction_like")},(n="_chekTheLikes")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._likes=i.likes,this._name=i.name,this._link=i.link,this._template=a,this._popupImage=document.querySelector(".popup_type_image"),this._imageInsidePopup=this._popupImage.querySelector(".image-container__img"),this._imageInformation=this._popupImage.querySelector(".image-container__info"),this._handleCardClick=u,this._sendLike=c,this._deleteLike=s,this._mainTemplate=this._getTemplate(),this._buttonLike=this._mainTemplate.querySelector(".element__reaction"),this._id=i._id,this._userId=l,this._amountOfLikes=this._mainTemplate.querySelector(".element__reaction-amount"),this._ownerId=i.owner._id,this._delete=f}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element").cloneNode(!0)}},{key:"createElement",value:function(){var e=this;return this._elementImage=this._mainTemplate.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._mainTemplate.querySelector(".element__name").textContent=this._name,this._setEventListener(),!0===this._likes.some((function(t){return t._id===e._userId}))&&this._buttonLike.classList.add("element__reaction_like"),this._amountOfLikes.textContent=this._likes.length,this._ownerId===this._userId&&this._mainTemplate.querySelector(".element__delete").setAttribute("style","visibility:visible"),this._mainTemplate}},{key:"_handeLikeClick",value:function(){var e=this;!0===this._likes.some((function(t){return t._id===e._userId}))?this._deleteLike(this._id).then(this._chekTheLikes).catch((function(e){return console.log(e)})):this._sendLike(this._id).then(this._chekTheLikes).catch((function(e){return console.log(e)}))}},{key:"_handeDeleteClick",value:function(){var e=this;this._delete(this._id).then((function(){e._mainTemplate.remove(),e._mainTemplate=null})).catch((function(e){console.log(e)}))}},{key:"_setEventListener",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(t){e._handeLikeClick(t)})),this._mainTemplate.querySelector(".element__delete").addEventListener("click",(function(t){e._handeDeleteClick(t)})),this._elementImage.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),t}();function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,r){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._validationConfig=t,this._inputList=function(e){if(Array.isArray(e))return n(e)}(o=this._form.querySelectorAll(this._validationConfig.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButton=this._form.querySelector(this._validationConfig.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_checkInputValidity",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_showInputError",value:function(e,t){e.classList.add(this._validationConfig.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._validationConfig.inputErrorClass),t.textContent="",t.classList.remove(this._validationConfig.errorClass)}},{key:"_setFormListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){return e._checkInputValidity(t)}))})),this._form.addEventListener("input",(function(){return e._toggleButtonState()}))}},{key:"_toggleButtonState",value:function(){this._submitButton.disabled=this._form.checkValidity(),this._submitButton.classList.toggle(this._validationConfig.inactiveButtonClass,!this._form.checkValidity()),this._submitButton.toggleAttribute("disabled")}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=e._form.querySelector("#".concat(t.id,"-error"));e._hideInputError(t,n)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setFormListeners()}}])&&r(t.prototype,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"additem",value:function(e){this._container.prepend(e)}},{key:"renderer",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&i(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name.textContent=t,this._job.textContent=n,this._avatar.src=r,this.id=o}}],n&&u(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_open")&&e.close(),t.target.classList.contains("popup__close")&&e.close()}))}}])&&s(t.prototype,n),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitCallback=t,n._inputs=function(e){if(Array.isArray(e))return p(e)}(r=n._popup.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.map((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;h(v(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues()),setTimeout((function(){return e.close()}),2e3)}))}}])&&_(t.prototype,n),a}(l);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function L(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(){return k(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e){this._imageInsidePopup=this._popup.querySelector(".image-container__img"),this._imageInformation=this._popup.querySelector(".image-container__info"),this._imageInsidePopup.src=e.link,this._imageInformation.textContent=e.name,this._imageInsidePopup.alt=e.name,C(j(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),a}(l),O=document.querySelector(".popup_type_profile"),I=document.querySelector(".popup_type_element"),P=document.querySelector(".popup_type_image"),T=document.querySelector(".profile__edit"),A=(document.querySelector(".popup__close_type_profile"),document.querySelector(".popup__form_type_info")),x=document.querySelector(".popup__input_type_name"),R=document.querySelector(".profile__name"),B=document.querySelector(".popup__input_type_job"),V=document.querySelector(".profile__status"),U=(document.querySelector(".popup__button"),document.querySelector(".elements")),D=(document.querySelector(".template").content,document.querySelector(".profile__add")),N=(document.querySelector(".popup__close_type_element"),document.querySelector(".popup__button_type_create")),J=document.querySelector(".popup__input_type_name-element"),M=document.querySelector(".popup__input_type_link"),F=document.querySelector("#input-ava-link"),H=(document.querySelector(".element__reaction"),document.querySelector(".popup__form_type_image")),$=(document.querySelector(".image-container__img"),document.querySelector(".popup__close_type_img"),document.querySelector(".image-container__info"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),z=document.querySelector(".profile__avatars"),G=document.querySelector(".popup_type_avatar-edit"),K=document.querySelector(".popup__form_type_avatar-edit"),Q=document.querySelector(".profile__avatars-edit"),W=document.querySelector(".popup__button_type_save"),X=document.querySelector(".popup__button_type_change");function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){function e(t){var n=this,r=t.adress,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Z(this,"sendLike",(function(e){return fetch(n._adress+"/cards/".concat(e,"/likes/"),{method:"PUT",headers:n._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})),Z(this,"deleteLike",(function(e){return fetch(n._adress+"/cards/".concat(e,"/likes/"),{method:"DELETE",headers:n._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})),Z(this,"deleteСards",(function(e){return fetch(n._adress+"/cards/".concat(e),{method:"DELETE",headers:n._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})),this._adress=r,this._headers=o}var t,n;return t=e,n=[{key:"getInitialCards",value:function(){return fetch(this._adress+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch(this._adress+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editUserInfo",value:function(e){return fetch(this._adress+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch(this._adress+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch(this._adress+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}],n&&Y(t.prototype,n),e}(),te=new o($,H),ne=new o($,A),re=new o($,K);te.enableValidation(),ne.enableValidation(),re.enableValidation();var oe=new ee({adress:"https://mesto.nomoreparties.co/v1/cohort-32",headers:{authorization:"49a3f156-043e-4000-9a32-20530068bc3d","Content-Type":"application/json"}});function ie(e){var n=new t({data:e,template:".template",handleCardClick:function(){return ce.open(e)},sendLike:oe.sendLike,deleteLike:oe.deleteLike,id:ue.id,deleteCards:oe.deleteСards});ae.additem(n.createElement())}oe.getInitialCards().then((function(e){e.forEach(ie)})).catch((function(e){console.log(e)})),oe.getUserInfo().then((function(e){ue.setUserInfo(e)}));var ae=new a({items:[],renderer:ie},U),ue=new c({name:R,job:V,avatar:z}),ce=new q(P),se=new b(O,(function(e){oe.editUserInfo(e).then((function(e){W.textContent="Сохранение..",setTimeout((function(){return ue.setUserInfo(e)}),2e3)})).catch((function(e){console.log(e)}))})),le=new b(I,(function(){oe.createCard({name:J.value,link:M.value}).then((function(e){N.textContent="Сохранение..",setTimeout((function(){return ie(e)}),2e3)})).catch((function(e){console.log(e)}))})),fe=new b(G,(function(){oe.changeAvatar(F.value).then((function(e){X.textContent="Сохранение..",setTimeout((function(){return ue.setUserInfo(e)}),2e3)})).catch((function(e){console.log(e)}))}));T.addEventListener("click",(function(){var e=ue.getUserInfo(),t=e.name,n=e.job;x.value=t,B.value=n,se.open(),ne.resetValidation(),W.textContent="Сохранить"})),D.addEventListener("click",(function(){le.open(),J.value="",M.value="",te.resetValidation(),N.textContent="Создать"})),Q.addEventListener("click",(function(){fe.open(),F.value="",re.resetValidation(),X.textContent="Сохранить"})),ce.setEventListeners(),se.setEventListeners(),le.setEventListeners(),fe.setEventListeners()})();