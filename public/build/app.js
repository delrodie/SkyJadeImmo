(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ressources_css_skyjade_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ressources/css/skyjade.css */ "./assets/ressources/css/skyjade.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _ressources_js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ressources/js/app */ "./assets/ressources/js/app.js");
/* harmony import */ var _ressources_js_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ressources_js_app__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
//import './styles/app.css';
 //import './ressources/sass/skyjade.scss';
// start the Stimulus application




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/ressources/js/app.js":
/*!*************************************!*\
  !*** ./assets/ressources/js/app.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

document.addEventListener("DOMContentLoaded", function () {
  var topBtn = document.getElementById('btnToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top'); // add padding top to show content behind navbar

      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
      document.getElementById('navbar_top').classList.remove('bg-transparent');
      document.getElementById('navbar_top').classList.add('bgmenu-scrol');
      topBtn.style.display = "block";
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top'); // remove padding top from body

      document.body.style.paddingTop = '0';
      document.getElementById('navbar_top').classList.add('bg-transparent');
      document.getElementById('navbar_top').classList.remove('bgmenu-scrol');
      topBtn.style.display = "none";
    }
  });

  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {
      everyitem.addEventListener('mouseover', function (e) {
        var el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          var nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
      });
      everyitem.addEventListener('mouseleave', function (e) {
        var el_link = this.querySelector('a[data-bs-toggle]');

        if (el_link != null) {
          var nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      });
    });
  }
});
$(document).ready(function () {
  $('.logo-partenaires').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        Infinite: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        Infinite: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        Infinite: true
      }
    }]
  });
});
$(document).ready(function () {
  $("#btnToTop").on('click', function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
$(document).ready(function () {
  if (window.matchMedia("(max-width: 425px)").matches) {
    document.getElementById('inputGroup').classList.add('input-group-sm');
  } else {
    /* the view port is less than 400 pixels wide */
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./assets/ressources/css/skyjade.css":
/*!*******************************************!*\
  !*** ./assets/ressources/css/skyjade.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDL0ZhO0FBQ2IsZUFBZSx3SEFBK0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7O0FDWFc7QUFDYixZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxXQUFXO0FBQzNELEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQTZEO0FBQ2pFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNURCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVzc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZXNzb3VyY2VzL2Nzcy9za3lqYWRlLmNzcz85NTc0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9yZXNzb3VyY2VzL2Nzcy9za3lqYWRlLmNzcyc7XG4vL2ltcG9ydCAnLi9yZXNzb3VyY2VzL3Nhc3Mvc2t5amFkZS5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAnLi9yZXNzb3VyY2VzL2pzL2FwcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblx0bGV0IHRvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Ub1RvcCcpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNTApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkLXRvcCcpO1xyXG4gICAgICAgIC8vIGFkZCBwYWRkaW5nIHRvcCB0byBzaG93IGNvbnRlbnQgYmVoaW5kIG5hdmJhclxyXG4gICAgICAgIG5hdmJhcl9oZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IG5hdmJhcl9oZWlnaHQgKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcl90b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdiZy10cmFuc3BhcmVudCcpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcl90b3AnKS5jbGFzc0xpc3QuYWRkKCdiZ21lbnUtc2Nyb2wnKTtcclxuXHRcdHRvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJfdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQtdG9wJyk7XHJcbiAgICAgICAgIC8vIHJlbW92ZSBwYWRkaW5nIHRvcCBmcm9tIGJvZHlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAnMCc7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2JnLXRyYW5zcGFyZW50Jyk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyX3RvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2JnbWVudS1zY3JvbCcpO1xyXG5cdFx0dG9wQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSBcclxuICB9KTtcclxuXHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXIgLm5hdi1pdGVtJykuZm9yRWFjaChmdW5jdGlvbihldmVyeWl0ZW0pe1xyXG5cclxuXHRcdGV2ZXJ5aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKXtcclxuXHJcblx0XHRcdGxldCBlbF9saW5rID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdhW2RhdGEtYnMtdG9nZ2xlXScpO1xyXG5cclxuXHRcdFx0aWYoZWxfbGluayAhPSBudWxsKXtcclxuXHRcdFx0XHRsZXQgbmV4dEVsID0gZWxfbGluay5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHRcdFx0ZWxfbGluay5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblx0XHRcdFx0bmV4dEVsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdFx0ZXZlcnlpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0bGV0IGVsX2xpbmsgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2FbZGF0YS1icy10b2dnbGVdJyk7XHJcblxyXG5cdFx0XHRpZihlbF9saW5rICE9IG51bGwpe1xyXG5cdFx0XHRcdGxldCBuZXh0RWwgPSBlbF9saW5rLm5leHRFbGVtZW50U2libGluZztcclxuXHRcdFx0XHRlbF9saW5rLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHRcdFx0XHRuZXh0RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdH0pXHJcblx0fSk7XHJcblxyXG59XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHQkKCcubG9nby1wYXJ0ZW5haXJlcycpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogOSxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG5cdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdHJlc3BvbnNpdmU6W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnJlYWtwb2ludDoxMDI0LFxyXG5cdFx0XHRcdHNldHRpbmdzOntcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNixcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOjEsXHJcblx0XHRcdFx0XHRJbmZpbml0ZTogdHJ1ZSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRicmVha3BvaW50Ojc2OCxcclxuXHRcdFx0XHRzZXR0aW5nczp7XHJcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDoxLFxyXG5cdFx0XHRcdFx0SW5maW5pdGU6IHRydWUsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnJlYWtwb2ludDo0ODAsXHJcblx0XHRcdFx0c2V0dGluZ3M6e1xyXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6MSxcclxuXHRcdFx0XHRcdEluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdF1cclxuXHR9KTtcclxuICB9KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHQkKFwiI2J0blRvVG9wXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIHRvcEZ1bmN0aW9uKCkge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xyXG4gIFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxuXHR9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDQyNXB4KVwiKS5tYXRjaGVzKSB7XHRcdFxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0R3JvdXAnKS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cC1zbScpO1xyXG5cdCAgfSBlbHNlIHtcclxuXHRcdC8qIHRoZSB2aWV3IHBvcnQgaXMgbGVzcyB0aGFuIDQwMCBwaXhlbHMgd2lkZSAqL1xyXG5cdCAgfVxyXG5cdCAgXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9wQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwibmF2YmFyX2hlaWdodCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRIZWlnaHQiLCJib2R5Iiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicmVtb3ZlIiwiZGlzcGxheSIsImlubmVyV2lkdGgiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImV2ZXJ5aXRlbSIsImUiLCJlbF9saW5rIiwibmV4dEVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiJCIsInJlYWR5Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJJbmZpbml0ZSIsIm9uIiwidG9wRnVuY3Rpb24iLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyJdLCJzb3VyY2VSb290IjoiIn0=