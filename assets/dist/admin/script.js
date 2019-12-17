(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"script": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackContainerBlockJsonp"] = window["webpackContainerBlockJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/src/admin/script.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/admin/components/Edit.jsx":
/*!**********************************************!*\
  !*** ./assets/src/admin/components/Edit.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.escape */ "./node_modules/lodash.escape/index.js");
/* harmony import */ var lodash_escape__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_escape__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Inspector_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Inspector.jsx */ "./assets/src/admin/components/Inspector.jsx");
/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../utils/shapes */ "./assets/src/admin/utils/shapes.js");
/* harmony import */ var _utils_withColors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../utils/withColors */ "./assets/src/admin/utils/withColors.js");
/* harmony import */ var _utils_withSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../utils/withSelect */ "./assets/src/admin/utils/withSelect.js");







/**
 * Block dependencies
 */




 // import Controls from './Controls.jsx';





/**
 * Internal block libraries
 */

var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var compose = wp.compose.compose;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (compose(_utils_withColors__WEBPACK_IMPORTED_MODULE_13__["default"], _utils_withSelect__WEBPACK_IMPORTED_MODULE_14__["default"])(
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Edit, _Component);

  function Edit(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hasInnerBlocks = _this$props.hasInnerBlocks,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var width = attributes.width,
          allowedBlocks = attributes.allowedBlocks;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_Inspector_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('wp-block-my-container__wrapper'),
        style: {
          maxWidth: width ? "".concat(parseInt(width), "px") : undefined
        }
      }, Array.isArray(allowedBlocks) && allowedBlocks.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InnerBlocks, {
        templateLock: false,
        allowedBlocks: allowedBlocks,
        renderAppender: !hasInnerBlocks && InnerBlocks.ButtonBlockAppender
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InnerBlocks, {
        renderAppender: !hasInnerBlocks && InnerBlocks.ButtonBlockAppender
      }))));
    }
  }]);

  return Edit;
}(Component)));

/***/ }),

/***/ "./assets/src/admin/components/Inspector.jsx":
/*!***************************************************!*\
  !*** ./assets/src/admin/components/Inspector.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../utils/colors */ "./assets/src/admin/utils/colors.js");
/* harmony import */ var _utils_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../utils/tabs */ "./assets/src/admin/utils/tabs.js");
/* harmony import */ var _utils_withColors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../utils/withColors */ "./assets/src/admin/utils/withColors.js");
/* harmony import */ var _utils_withSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../utils/withSelect */ "./assets/src/admin/utils/withSelect.js");







/**
 * Block dependencies
 */






/**
 * Internal block libraries
 */

var _x = wp.i18n._x;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var compose = wp.compose.compose;
var _wp$blockEditor = wp.blockEditor,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TabPanel = _wp$components.TabPanel,
    FocalPointPicker = _wp$components.FocalPointPicker,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    withFallbackStyles = _wp$components.withFallbackStyles;
/**
 * Contrast checker
 */

var _window = window,
    getComputedStyle = _window.getComputedStyle;
/* harmony default export */ __webpack_exports__["default"] = (compose(_utils_withColors__WEBPACK_IMPORTED_MODULE_10__["default"], _utils_withSelect__WEBPACK_IMPORTED_MODULE_11__["default"])(
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Inspector, _Component);

  function Inspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Inspector).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          colors = _this$props.colors,
          isSelected = _this$props.isSelected,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var width = attributes.width,
          isFH = attributes.isFH,
          shadow = attributes.shadow,
          ariaLabel = attributes.ariaLabel,
          scroll = attributes.scroll,
          visible = attributes.visible,
          spacing = attributes.spacing,
          alignment = attributes.alignment,
          shape = attributes.shape,
          link = attributes.link,
          aos = attributes.aos; // Scroll-to

      var scrollShow = scroll.show,
          scrollTarget = scroll.target,
          scrollColor = scroll.color; // Visibility

      var visDesktop = visible.desktop,
          visLaptop = visible.laptop,
          visTablet = visible.tablet,
          visSmartphone = visible.smartphone; // Spacing

      var hrzDesktop = spacing.desktop,
          hrzLaptop = spacing.laptop,
          hrzTablet = spacing.tablet,
          hrzSmartphone = spacing.smartphone; // Alignment

      var alignDesktop = alignment.desktop,
          alignLaptop = alignment.laptop,
          alignTablet = alignment.tablet,
          alignSmartphone = alignment.smartphone; // Link-to

      var linkUrl = link.url,
          linkTarget = link.target; // Shape

      var shapeType = shape.type,
          shapeHeight = shape.height,
          shapeColor = shape.color; // Animation

      var aosType = aos.type,
          aosOnce = aos.once,
          aosOffset = aos.offset,
          aosDuration = aos.duration,
          aosDelay = aos.delay,
          aosEase = aos.ease; // Scroll — Status

      var onChangeScrollShow = function onChangeScrollShow(value) {
        setAttributes({
          scroll: {
            show: !scrollShow,
            target: scrollTarget,
            color: scrollColor
          }
        });
      }; // Scroll — Target


      var onChangeScrollTarget = function onChangeScrollTarget(value) {
        setAttributes({
          scroll: {
            show: scrollShow,
            target: value,
            color: scrollColor
          }
        });
      }; // Scroll — Color


      var onChangeScrollColor = function onChangeScrollColor(value) {
        setAttributes({
          scroll: {
            show: scrollShow,
            target: scrollTarget,
            color: value
          }
        });
      }; // Visibility — Desktop


      var onChangeVisDesktop = function onChangeVisDesktop(value) {
        setAttributes({
          visible: {
            desktop: !visDesktop,
            laptop: visLaptop,
            tablet: visTablet,
            smartphone: visSmartphone
          }
        });
      }; // Visibility — Laptop


      var onChangeVisLaptop = function onChangeVisLaptop(value) {
        setAttributes({
          visible: {
            desktop: visDesktop,
            laptop: !visLaptop,
            tablet: visTablet,
            smartphone: visSmartphone
          }
        });
      }; // Visibility — Tablet


      var onChangeVisTablet = function onChangeVisTablet(value) {
        setAttributes({
          visible: {
            desktop: visDesktop,
            laptop: visLaptop,
            tablet: !visTablet,
            smartphone: visSmartphone
          }
        });
      }; // Visibility — Mobile


      var onChangeVisSmartphone = function onChangeVisSmartphone(value) {
        setAttributes({
          visible: {
            desktop: visDesktop,
            laptop: visLaptop,
            tablet: visTablet,
            smartphone: !visSmartphone
          }
        });
      }; // Spacing — Desktop


      var onChangeHrzDesktop = function onChangeHrzDesktop(value) {
        setAttributes({
          spacing: {
            desktop: value,
            laptop: hrzLaptop,
            tablet: hrzTablet,
            smartphone: hrzSmartphone
          }
        });
      }; // Spacing — Laptop


      var onChangeHrzLaptop = function onChangeHrzLaptop(value) {
        setAttributes({
          spacing: {
            desktop: hrzDesktop,
            laptop: value,
            tablet: hrzTablet,
            smartphone: hrzSmartphone
          }
        });
      }; // Spacing — Tablet


      var onChangeHrzTablet = function onChangeHrzTablet(value) {
        setAttributes({
          spacing: {
            desktop: hrzDesktop,
            laptop: hrzLaptop,
            tablet: value,
            smartphone: hrzSmartphone
          }
        });
      }; // Spacing — Mobile


      var onChangeHrzSmartphone = function onChangeHrzSmartphone(value) {
        setAttributes({
          spacing: {
            desktop: hrzDesktop,
            laptop: hrzLaptop,
            tablet: hrzTablet,
            smartphone: value
          }
        });
      }; // Alignment — Desktop


      var onChangeAlignDesktop = function onChangeAlignDesktop(value) {
        setAttributes({
          alignment: {
            desktop: value,
            laptop: alignLaptop,
            tablet: alignTablet,
            smartphone: alignSmartphone
          }
        });
      }; // Alignment — Laptop


      var onChangeAlignLaptop = function onChangeAlignLaptop(value) {
        setAttributes({
          alignment: {
            desktop: alignDesktop,
            laptop: value,
            tablet: alignTablet,
            smartphone: alignSmartphone
          }
        });
      }; // Alignment — Tablet


      var onChangeAlignTablet = function onChangeAlignTablet(value) {
        setAttributes({
          alignment: {
            desktop: alignDesktop,
            laptop: alignLaptop,
            tablet: value,
            smartphone: alignSmartphone
          }
        });
      }; // Alignment — Mobile


      var onChangeAlignSmartphone = function onChangeAlignSmartphone(value) {
        setAttributes({
          alignment: {
            desktop: alignDesktop,
            laptop: alignLaptop,
            tablet: alignTablet,
            smartphone: value
          }
        });
      }; // Link — Url


      var onChangeLinkUrl = function onChangeLinkUrl(value) {
        setAttributes({
          link: {
            url: value,
            target: linkTarget
          }
        });
      }; // Link — Url


      var onChangeLinkTarget = function onChangeLinkTarget(value) {
        setAttributes({
          link: {
            url: linkUrl,
            target: !linkTarget
          }
        });
      }; // Shape — Type


      var onChangeShapeType = function onChangeShapeType(value) {
        setAttributes({
          shape: {
            type: value,
            height: shapeHeight,
            color: shapeColor
          }
        });
      }; // Shape — Height


      var onChangeShapeHeight = function onChangeShapeHeight(value) {
        setAttributes({
          shape: {
            type: shapeType,
            height: value,
            color: shapeColor
          }
        });
      }; // Shape — Color


      var onChangeShapeColor = function onChangeShapeColor(value) {
        setAttributes({
          shape: {
            type: shapeType,
            height: shapeHeight,
            color: value
          }
        });
      }; // AOS — Type


      var onChangeAosType = function onChangeAosType(value) {
        setAttributes({
          aos: {
            type: value,
            once: aosOnce,
            offset: aosOffset,
            duration: aosDuration,
            delay: aosDelay,
            ease: aosEase
          }
        });
      }; // AOS — Ease


      var onChangeAosEase = function onChangeAosEase(value) {
        setAttributes({
          aos: {
            type: aosType,
            once: aosOnce,
            offset: aosOffset,
            duration: aosDuration,
            delay: aosDelay,
            ease: value
          }
        });
      }; // AOS — Offset


      var onChangeAosOffset = function onChangeAosOffset(value) {
        setAttributes({
          aos: {
            type: aosType,
            once: aosOnce,
            offset: value,
            duration: aosDuration,
            delay: aosDelay,
            ease: aosEase
          }
        });
      }; // AOS — Delay


      var onChangeAosDelay = function onChangeAosDelay(value) {
        setAttributes({
          aos: {
            type: aosType,
            once: aosOnce,
            offset: aosOffset,
            duration: aosDuration,
            delay: value,
            ease: aosEase
          }
        });
      }; // AOS — Duration


      var onChangeAosDuration = function onChangeAosDuration(value) {
        setAttributes({
          aos: {
            type: aosType,
            once: aosOnce,
            offset: aosOffset,
            duration: value,
            delay: aosDelay,
            ease: aosEase
          }
        });
      }; // AOS — Once


      var onChangeAosOnce = function onChangeAosOnce(value) {
        setAttributes({
          aos: {
            type: aosType,
            once: !aosOnce,
            offset: aosOffset,
            duration: aosDuration,
            delay: aosDelay,
            ease: aosEase
          }
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: _x('Width', 'control label', 'container-block'),
        help: _x('Maximum width of the inner wrapper.', 'panel title', 'container-block'),
        allowReset: true,
        value: width,
        onChange: function onChange(value) {
          return setAttributes({
            width: value || undefined
          });
        },
        step: "1",
        min: "100",
        max: "1920"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Display', 'panel title', 'conj-powerpack'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: _x('Full-height?', 'control label', 'conj-powerpack'),
        help: _x('Stretches the container to fit the whole height of the browser window.', 'control help', 'conj-powerpack'),
        checked: !!isFH,
        onChange: function onChange() {
          return setAttributes({
            isFH: !isFH
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: _x('Scroll down icon', 'control label', 'conj-powerpack'),
        help: _x('Displays a delicate scrolling mouse wheel animation that will offer direction to the user after the initial land on a website.', 'control help', 'conj-powerpack'),
        checked: !!scrollShow,
        onChange: onChangeScrollShow
      }), scrollShow && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: _x('Element ID', 'control label', 'conj-powerpack'),
        help: _x('Smoothly scroll the window to a specific element or tag ID within the page.', 'control help', 'conj-powerpack'),
        value: scrollTarget,
        onChange: onChangeScrollTarget
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: "components-base-control__field components-base-control__flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "components-base-control__label"
      }, _x('Color', 'color label', 'conj-powerpack')), scrollColor && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorIndicator, {
        colorValue: scrollColor
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        clearable: true,
        colors: colors || _utils_colors__WEBPACK_IMPORTED_MODULE_8__["default"],
        value: scrollColor,
        onChange: onChangeScrollColor
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Visibility', 'panel title', 'container-block'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "components-tab-panel components-insp-tabs",
        activeClass: "components-insp-tabs__active",
        tabs: _utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"]
      }, function (tab) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, 'desktop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
          label: _x('Hide from the view?', 'control label', 'container-block'),
          checked: !!visDesktop,
          onChange: onChangeVisDesktop
        }), 'laptop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
          label: _x('Hide from the view?', 'control label', 'container-block'),
          checked: !!visLaptop,
          onChange: onChangeVisLaptop
        }), 'tablet' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
          label: _x('Hide from the view?', 'control label', 'container-block'),
          checked: !!visTablet,
          onChange: onChangeVisTablet
        }), 'smartphone' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
          label: _x('Hide from the view?', 'control label', 'container-block'),
          checked: !!visSmartphone,
          onChange: onChangeVisSmartphone
        }));
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Spacing', 'panel title', 'conj-powerpack'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "components-tab-panel components-insp-tabs",
        activeClass: "components-insp-tabs__active",
        tabs: _utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"]
      }, function (tab) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, 'desktop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
          readonly: "readonly",
          allowReset: true,
          value: hrzDesktop,
          onChange: onChangeHrzDesktop,
          step: "5",
          min: "0",
          max: "50"
        }), 'laptop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
          readonly: "readonly",
          allowReset: true,
          value: hrzLaptop,
          onChange: onChangeHrzLaptop,
          step: "5",
          min: "0",
          max: "50"
        }), 'tablet' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
          readonly: "readonly",
          allowReset: true,
          value: hrzTablet,
          onChange: onChangeHrzTablet,
          step: "5",
          min: "0",
          max: "50"
        }), 'smartphone' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
          readonly: "readonly",
          allowReset: true,
          value: hrzSmartphone,
          onChange: onChangeHrzSmartphone,
          step: "5",
          min: "0",
          max: "50"
        }));
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Alignment', 'panel title', 'conj-powerpack'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TabPanel, {
        className: "components-tab-panel components-insp-tabs",
        activeClass: "components-insp-tabs__active",
        tabs: _utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"]
      }, function (tab) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, 'desktop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AlignmentToolbar, {
          isCollapsed: false,
          value: alignDesktop,
          onChange: onChangeAlignDesktop
        }), 'laptop' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AlignmentToolbar, {
          isCollapsed: false,
          value: alignLaptop,
          onChange: onChangeAlignLaptop
        }), 'tablet' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AlignmentToolbar, {
          isCollapsed: false,
          value: alignTablet,
          onChange: onChangeAlignTablet
        }), 'smartphone' === tab.name && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AlignmentToolbar, {
          isCollapsed: false,
          value: alignSmartphone,
          onChange: onChangeAlignSmartphone
        }));
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Link to', 'panel title', 'container-block'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(URLInput, {
        hasBorder: true,
        isFullWidth: true,
        value: linkUrl,
        autoFocus: false,
        className: "components-base-control",
        disableSuggestions: !isSelected,
        onChange: onChangeLinkUrl
      }), linkUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: _x('Open in a new window?', 'control label', 'container-block'),
        checked: !!linkTarget,
        onChange: onChangeLinkTarget
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Shadow', 'panel title', 'container-block'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: _x('Type', 'control label', 'container-block'),
        help: _x('Shadow utlities to add a box shadow to the element.', 'control help', 'container-block'),
        value: shadow,
        options: [{
          label: _x('None', 'shadow style', 'container-block'),
          value: ''
        }, {
          label: _x('Light', 'shadow style', 'container-block'),
          value: 'light'
        }, {
          label: _x('Light Large', 'shadow style', 'container-block'),
          value: 'light-lg'
        }, {
          label: _x('Dark', 'shadow style', 'container-block'),
          value: 'dark'
        }, {
          label: _x('Dark Large', 'shadow style', 'container-block'),
          value: 'dark-lg'
        }, {
          label: _x('Lift', 'shadow style', 'container-block'),
          value: 'lift'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            shadow: value || undefined
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Shape', 'panel title', 'container-block'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: _x('Type', 'control label', 'container-block'),
        help: _x('Multiple shapes to use as separators for sections or as background images.', 'control help', 'container-block'),
        value: shapeType,
        options: [{
          label: _x('None', 'shape style', 'container-block'),
          value: ''
        }, {
          label: _x('Simple', 'shape style', 'container-block'),
          value: 'simple-custom'
        }, {
          label: _x('Concave Up', 'shape style', 'container-block'),
          value: 'concave-up'
        }, {
          label: _x('Concave Up (Adjustable)', 'shape style', 'container-block'),
          value: 'concave-up-custom'
        }, {
          label: _x('Concave Down', 'shape style', 'container-block'),
          value: 'concave-down'
        }, {
          label: _x('Concave Up, Increasing', 'shape style', 'container-block'),
          value: 'concave-up-increasing'
        }, {
          label: _x('Concave Up, Decreasing', 'shape style', 'container-block'),
          value: 'concave-up-decreasing'
        }, {
          label: _x('Curve Left', 'shape style', 'container-block'),
          value: 'curve-left'
        }, {
          label: _x('Curve Right', 'shape style', 'container-block'),
          value: 'curve-right'
        }, {
          label: _x('Angle Top', 'shape style', 'container-block'),
          value: 'angle-top'
        }, {
          label: _x('Angle Right', 'shape style', 'container-block'),
          value: 'angle-right'
        }, {
          label: _x('Angle Bottom', 'shape style', 'container-block'),
          value: 'angle-bottom'
        }, {
          label: _x('Angle Left', 'shape style', 'container-block'),
          value: 'angle-left'
        }, {
          label: _x('Wave', 'shape style', 'container-block'),
          value: 'wave'
        }, {
          label: _x('Blur 1', 'shape style', 'container-block'),
          value: 'blur-1'
        }, {
          label: _x('Blur 2', 'shape style', 'container-block'),
          value: 'blur-2'
        }, {
          label: _x('Blur 3', 'shape style', 'container-block'),
          value: 'blur-3'
        }, {
          label: _x('Blur 4', 'shape style', 'container-block'),
          value: 'blur-4'
        }],
        onChange: onChangeShapeType
      }), shapeType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, shapeType.includes('custom') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        readonly: "readonly",
        label: _x('Height', 'control label', 'container-block'),
        value: shapeHeight,
        onChange: onChangeShapeHeight,
        step: "0.5",
        min: "5",
        max: "100"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: "components-base-control__field components-base-control__flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "components-base-control__label"
      }, _x('Color', 'color label', 'conj-powerpack')), shapeColor && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorIndicator, {
        colorValue: shapeColor
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ColorPalette, {
        clearable: true,
        colors: colors || _utils_colors__WEBPACK_IMPORTED_MODULE_8__["default"],
        value: shapeColor,
        onChange: onChangeShapeColor
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: _x('Animation', 'panel title', 'container-block'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: _x('Type', 'control label', 'container-block'),
        help: _x('This module allows you to animate elements as you scroll down, and up.', 'control help', 'container-block'),
        value: aosType,
        options: [{
          label: _x('None', 'animation type', 'container-block'),
          value: ''
        }, {
          label: _x('Fade', 'animation type', 'container-block'),
          value: 'fade'
        }, {
          label: _x('Fade-up', 'animation type', 'container-block'),
          value: 'fade-up'
        }, {
          label: _x('Fade-down', 'animation type', 'container-block'),
          value: 'fade-down'
        }, {
          label: _x('Fade-left', 'animation type', 'container-block'),
          value: 'fade-left'
        }, {
          label: _x('Fade-right', 'animation type', 'container-block'),
          value: 'fade-right'
        }, {
          label: _x('Fade-up-right', 'animation type', 'container-block'),
          value: 'fade-up-right'
        }, {
          label: _x('Fade-up-left', 'animation type', 'container-block'),
          value: 'fade-up-left'
        }, {
          label: _x('Fade-down-right', 'animation type', 'container-block'),
          value: 'fade-down-right'
        }, {
          label: _x('Fade-down-left', 'animation type', 'container-block'),
          value: 'fade-down-left'
        }, {
          label: _x('Flip-up', 'animation type', 'container-block'),
          value: 'flip-up'
        }, {
          label: _x('Flip-down', 'animation type', 'container-block'),
          value: 'flip-down'
        }, {
          label: _x('Flip-left', 'animation type', 'container-block'),
          value: 'flip-left'
        }, {
          label: _x('Flip-right', 'animation type', 'container-block'),
          value: 'flip-right'
        }, {
          label: _x('Slide-up', 'animation type', 'container-block'),
          value: 'slide-up'
        }, {
          label: _x('Slide-down', 'animation type', 'container-block'),
          value: 'slide-down'
        }, {
          label: _x('Slide-left', 'animation type', 'container-block'),
          value: 'slide-left'
        }, {
          label: _x('Slide-right', 'animation type', 'container-block'),
          value: 'slide-right'
        }, {
          label: _x('Zoom-in', 'animation type', 'container-block'),
          value: 'zoom-in'
        }, {
          label: _x('Zoom-in-up', 'animation type', 'container-block'),
          value: 'zoom-in-up'
        }, {
          label: _x('Zoom-in-down', 'animation type', 'container-block'),
          value: 'zoom-in-down'
        }, {
          label: _x('Zoom-in-left', 'animation type', 'container-block'),
          value: 'zoom-in-left'
        }, {
          label: _x('Zoom-in-right', 'animation type', 'container-block'),
          value: 'zoom-in-right'
        }, {
          label: _x('Zoom-out', 'animation type', 'container-block'),
          value: 'zoom-out'
        }, {
          label: _x('Zoom-out-up', 'animation type', 'container-block'),
          value: 'zoom-out-up'
        }, {
          label: _x('Zoom-out-down', 'animation type', 'container-block'),
          value: 'zoom-out-down'
        }, {
          label: _x('Zoom-out-left', 'animation type', 'container-block'),
          value: 'zoom-out-left'
        }, {
          label: _x('Zoom-out-right', 'animation type', 'container-block'),
          value: 'zoom-out-right'
        }],
        onChange: onChangeAosType
      }), aosType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: _x('Ease', 'control label', 'container-block'),
        help: _x('Choose timing function to ease elements in different ways.', 'control help', 'container-block'),
        value: aosEase,
        options: [{
          label: _x('Linear', 'animation ease type', 'container-block'),
          value: 'linear'
        }, {
          label: _x('Ease', 'animation ease type', 'container-block'),
          value: 'ease'
        }, {
          label: _x('Ease-in', 'animation ease type', 'container-block'),
          value: 'ease-in'
        }, {
          label: _x('Ease-out', 'animation ease type', 'container-block'),
          value: 'ease-out'
        }, {
          label: _x('Ease-in-out', 'animation ease type', 'container-block'),
          value: 'ease-in-out'
        }, {
          label: _x('Ease-in-back', 'animation ease type', 'container-block'),
          value: 'ease-in-back'
        }, {
          label: _x('Ease-out-back', 'animation ease type', 'container-block'),
          value: 'ease-out-back'
        }, {
          label: _x('Ease-in-out-back', 'animation ease type', 'container-block'),
          value: 'ease-in-out-back'
        }, {
          label: _x('Ease-in-sine', 'animation ease type', 'container-block'),
          value: 'ease-in-sine'
        }, {
          label: _x('Ease-out-sine', 'animation ease type', 'container-block'),
          value: 'ease-out-sine'
        }, {
          label: _x('Ease-in-out-sine', 'animation ease type', 'container-block'),
          value: 'ease-in-out-sine'
        }, {
          label: _x('Ease-in-quad', 'animation ease type', 'container-block'),
          value: 'ease-in-quad'
        }, {
          label: _x('Ease-out-quad', 'animation ease type', 'container-block'),
          value: 'ease-out-quad'
        }, {
          label: _x('Ease-in-out-quad', 'animation ease type', 'container-block'),
          value: 'ease-in-out-quad'
        }, {
          label: _x('Ease-in-cubic', 'animation ease type', 'container-block'),
          value: 'ease-in-cubic'
        }, {
          label: _x('Ease-out-cubic', 'animation ease type', 'container-block'),
          value: 'ease-out-cubic'
        }, {
          label: _x('Ease-in-out-cubic', 'animation ease type', 'container-block'),
          value: 'ease-in-out-cubic'
        }, {
          label: _x('Ease-in-quart', 'animation ease type', 'container-block'),
          value: 'ease-in-quart'
        }, {
          label: _x('Ease-out-quart', 'animation ease type', 'container-block'),
          value: 'ease-out-quart'
        }, {
          label: _x('Ease-in-out-quart', 'animation ease type', 'container-block'),
          value: 'ease-in-out-quart'
        }],
        onChange: onChangeAosEase
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: _x('Offset', 'control label', 'container-block'),
        help: _x('Change offset to trigger animations sooner or later in pixels.', 'control help', 'container-block'),
        value: aosOffset,
        onChange: onChangeAosOffset,
        step: "1",
        min: "0"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: _x('Delay', 'control label', 'container-block'),
        help: _x('Delay animation in milliseconds.', 'control help', 'container-block'),
        value: aosDelay,
        onChange: onChangeAosDelay,
        step: "1",
        min: "0"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: _x('Duration', 'control label', 'container-block'),
        help: _x('Duration of animation in milliseconds.', 'control help', 'container-block'),
        readonly: "readonly",
        value: aosDuration,
        onChange: onChangeAosDuration,
        step: "50",
        min: "50",
        max: "3000"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: _x('Run once?', 'control label', 'container-block'),
        help: _x('Choose wheter animation should fire once, or every time you scroll up/down to element.', 'control help', 'container-block'),
        checked: !!aosOnce,
        onChange: onChangeAosOnce
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(TextControl, {
        label: _x('Aria Label', 'control label', 'container-block'),
        help: _x('This attribute is used to define a string that labels the current element. You might use it in cases where a text label is not visible on the screen.', 'control help', 'container-block'),
        value: ariaLabel,
        onChange: function onChange(value) {
          return setAttributes({
            ariaLabel: value
          });
        }
      })));
    }
  }]);

  return Inspector;
}(Component)));

/***/ }),

/***/ "./assets/src/admin/components/Save.jsx":
/*!**********************************************!*\
  !*** ./assets/src/admin/components/Save.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/src/admin/icons.jsx":
/*!************************************!*\
  !*** ./assets/src/admin/icons.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Internal block libraries
 */
var _wp$components = wp.components,
    G = _wp$components.G,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Custom block icons
 */

var icons = {};
icons.container = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 25 25",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M12.499 1.768l9.637 3.661-10.269 3.693-9.148-3.636 9.781-3.718zM1.421 6.219l9.613 3.821-1.339 2.465-9.696-3.73 1.422-2.556zM1.612 10.784l7.955 2.987c0.067 0.027 0.233 0.038 0.302 0.038 0.208 0 0.619-0.112 0.723-0.302l1.020-1.48v11.174l-10-3.819v-8.598zM22.445 19.365l-10 3.868v-11.638l1.526 2.195c0.11 0.159 0.289 0.249 0.474 0.249 0.071 0-0.084-0.012-0.017-0.037l8.015-3.17 0.002 8.534zM14.66 12.752l-1.892-2.72 10.778-3.874 1.456 2.617-10.342 3.977z"
}));
icons.loader = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M8.175 7.377l-3.042-5.27 1.732-1 3.045 5.273c-.635.238-1.222.573-1.735.997zm-.799.8l-5.27-3.042-1 1.732 5.274 3.045c.237-.635.572-1.223.996-1.735zm-1.376 3.823c0-.341.035-.673.09-.999h-6.09v1.999h6.09c-.055-.326-.09-.659-.09-1zm11.351-2.705l5.208-3.007-.333-.577-5.206 3.007c.121.185.23.379.331.577zm-5.351-3.295c.341 0 .673.035.999.09v-6.09h-1.999v6.09c.326-.055.659-.09 1-.09zm3.14.894l3.004-5.204-.288-.166-3 5.197.284.173zm1.685 8.662l5.234 3.022.666-1.154-5.229-3.019c-.181.41-.408.794-.671 1.151zm-10.444-1.467l-5.274 3.046 1 1.732 5.27-3.042c-.424-.513-.759-1.1-.996-1.736zm11.594-2.589l.025.5-.025.5h6.025v-1h-6.025zm-3.727 6.061l3.03 5.249 1.442-.833-3.031-5.25c-.437.34-.92.623-1.441.834zm-2.248.439c-.341 0-.674-.035-1-.09v6.09h1.999v-6.09c-.326.055-.658.09-.999.09zm-3.824-1.376l-3.042 5.27 1.732 1 3.045-5.274c-.635-.237-1.222-.572-1.735-.996z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./assets/src/admin/index.jsx":
/*!************************************!*\
  !*** ./assets/src/admin/index.jsx ***!
  \************************************/
/*! exports provided: name, title, category, icon, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _icons_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.jsx */ "./assets/src/admin/icons.jsx");
/* harmony import */ var _components_Edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Edit.jsx */ "./assets/src/admin/components/Edit.jsx");
/* harmony import */ var _components_Save_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Save.jsx */ "./assets/src/admin/components/Save.jsx");
/* harmony import */ var _components_Save_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Save_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/attributes */ "./assets/src/admin/utils/attributes.js");
/* harmony import */ var _utils_transforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/transforms */ "./assets/src/admin/utils/transforms.js");
/**
 * Block dependencies
 */





/**
 * Internal block libraries
 */

var _x = wp.i18n._x;
/**
 * Meta-data for registering block type
 */

var name = 'container';

var title = _x('Container', 'block title', 'container-block');

var category = 'layout';
var icon = _icons_jsx__WEBPACK_IMPORTED_MODULE_0__["default"].container;
/**
 * Block settings
 */

var settings = {
  title: title,
  description: _x('Container block is used to wrap several blocks in a parent wrapper and enables you to do more sophisticated styling as well.', 'block description', 'container-block'),
  keywords: [_x('Group', 'block keyword', 'container-block'), _x('Section', 'block keyword', 'container-block'), _x('Wrapper', 'block keyword', 'container-block')],
  supports: {
    anchor: true,
    html: false,
    align: ['wide', 'full']
  },
  attributes: _utils_attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  transforms: _utils_transforms__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _components_Edit_jsx__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(props) {
    return null;
  }
};


/***/ }),

/***/ "./assets/src/admin/loader/index.jsx":
/*!*******************************************!*\
  !*** ./assets/src/admin/loader/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/src/admin/script.js":
/*!************************************!*\
  !*** ./assets/src/admin/script.js ***!
  \************************************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./assets/src/admin/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx */ "./assets/src/admin/index.jsx");
/* harmony import */ var _loader_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/index.jsx */ "./assets/src/admin/loader/index.jsx");
/* harmony import */ var _loader_index_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_index_jsx__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Block dependencies
 */

/**
 * Import custom/built-in editor blocks.
 */



function registerBlocks() {
  [_index_jsx__WEBPACK_IMPORTED_MODULE_1__ // loader
  ].forEach(function (block) {
    if (!block) {
      return;
    } // End If Statement


    var name = block.name,
        category = block.category,
        icon = block.icon,
        settings = block.settings;
    wp.blocks.registerBlockType("my/".concat(name), Object.assign({
      category: category,
      icon: {
        src: icon
      }
    }, settings));
  });
}
;
registerBlocks();

/***/ }),

/***/ "./assets/src/admin/style.css":
/*!************************************!*\
  !*** ./assets/src/admin/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!./style.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./assets/src/admin/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./assets/src/admin/utils/attributes.js":
/*!**********************************************!*\
  !*** ./assets/src/admin/utils/attributes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  width: {
    type: 'number'
  },
  isFH: {
    type: 'boolean',
    default: false
  },
  shadow: {
    type: 'string'
  },
  ariaLabel: {
    type: 'string'
  },
  allowedBlocks: {
    type: 'array',
    default: []
  },
  scroll: {
    type: 'object',
    default: {
      show: false,
      target: undefined,
      color: undefined
    }
  },
  visible: {
    type: 'object',
    default: {
      desktop: false,
      laptop: false,
      tablet: false,
      smartphone: false
    }
  },
  spacing: {
    type: 'object',
    default: {
      desktop: undefined,
      laptop: undefined,
      tablet: undefined,
      smartphone: undefined
    }
  },
  alignment: {
    type: 'object',
    default: {
      desktop: undefined,
      laptop: undefined,
      tablet: undefined,
      smartphone: undefined
    }
  },
  link: {
    type: 'object',
    default: {
      url: undefined,
      target: false
    }
  },
  shape: {
    type: 'object',
    default: {
      type: undefined,
      height: 5,
      color: undefined
    }
  },
  aos: {
    type: 'object',
    default: {
      type: undefined,
      once: false,
      offset: 120,
      duration: 400,
      delay: 0,
      ease: 'ease'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./assets/src/admin/utils/colors.js":
/*!******************************************!*\
  !*** ./assets/src/admin/utils/colors.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal block libraries
 */
var _x = wp.i18n._x;
var colors = []; // White

colors.push({
  name: _x('White', 'color pallet', 'container-block'),
  slug: 'white',
  color: '#FFFFFF'
}); // Black

colors.push({
  name: _x('Black', 'color pallet', 'container-block'),
  slug: 'black',
  color: '#000000'
}); // Blue

colors.push({
  name: _x('Blue', 'color pallet', 'container-block'),
  slug: 'blue',
  color: '#59BACC'
}); // Green

colors.push({
  name: _x('Green', 'color pallet', 'container-block'),
  slug: 'green',
  color: '#58AD69'
}); // Orange

colors.push({
  name: _x('Orange', 'color pallet', 'container-block'),
  slug: 'orange',
  color: '#FFBC49'
}); // Red

colors.push({
  name: _x('Red', 'color pallet', 'container-block'),
  slug: 'red',
  color: '#E2574C'
});
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./assets/src/admin/utils/shapes.js":
/*!******************************************!*\
  !*** ./assets/src/admin/utils/shapes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Internal block libraries
 */
var _wp$components = wp.components,
    G = _wp$components.G,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/**
 * Custom block separator
 */

var shapes = {};
shapes['simple-custom'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 1280 139",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M1280 140V0S529 0 0 0v140z",
  fill: "currentColor"
}));
shapes['concave-up'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",
  fill: "currentColor"
}));
shapes['concave-up-custom'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 1280 140",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M59.44 4.31L84.15 5.87L109.69 7.36L136.05 8.79L163.18 10.14L191.07 11.42L219.69 12.62L249 13.75L278.98 14.79L309.6 15.76L340.84 16.65L372.66 17.45L405.04 18.16L437.95 18.78L471.37 19.32L505.26 19.76L539.59 20.11L574.35 20.36L609.49 20.51L645 20.56L680.51 20.51L715.65 20.36L750.41 20.11L784.74 19.76L818.63 19.32L852.05 18.78L884.96 18.16L917.34 17.45L949.16 16.65L980.4 15.76L1011.02 14.79L1041 13.75L1070.31 12.62L1098.93 11.42L1126.82 10.14L1153.95 8.79L1180.31 7.36L1205.85 5.87L1230.56 4.31L1254.41 2.69L1277.36 1L1280 0.79L1280 140L0 140L0 0L12.64 1L35.59 2.69L35.59 2.69L59.44 4.31Z",
  fill: "currentColor"
}));
shapes['concave-down'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M720 28H0V56H995.5H1639.5H2880V28H2160C2160 28 1874 -9.82909e-10 1440 0C1006 9.829e-10 720 28 720 28Z",
  fill: "currentColor"
}));
shapes['concave-up-increasing'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 480",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z",
  "clip-rule": "evenodd",
  "fill-rule": "evenodd",
  fill: "currentColor"
}));
shapes['concave-up-decreasing'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 480",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M720 0C1440 240 2160 240 2160 240H2880V480H-0.000244141V0H720Z",
  "clip-rule": "evenodd",
  "fill-rule": "evenodd",
  fill: "currentColor"
}));
shapes['curve-left'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 112 690",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M2.14577e-06 0H62.7586V172C38.6207 384 112 517 112 517V690H2.14577e-06V0Z",
  fill: "currentColor"
}));
shapes['curve-right'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 112 690",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M116 0H51V172C76 384 0 517 0 517V690H116V0Z",
  fill: "currentColor"
}));
shapes['angle-top'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 250",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 0H2880V125H2160L720 250H0V0Z",
  fill: "currentColor"
}));
shapes['angle-right'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 100 1544",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 386V0H100V1544H50V1158L0 386Z",
  fill: "currentColor"
}));
shapes['angle-bottom'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 250",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M720 125L2160 0H2880V250H0V125H720Z",
  fill: "currentColor"
}));
shapes['angle-left'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 100 1544",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 0H100V386L50 1158V1544H0V0Z",
  fill: "currentColor"
}));
shapes['wave'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 2880 72",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M2880 0H0V54.1118H720C720 54.1118 1009.42 94.3602 1425 54.1118C1841.5 16.3789 2160 54.1118 2160 54.1118H2880V0Z",
  fill: "currentColor"
}));
shapes['blur-1'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 723 569",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M703.969 241.602L703.963 241.599C716.081 262.97 723 287.677 723 314C723 382.917 675.575 440.757 611.58 456.665L246.7 556.937C226.465 564.729 204.481 569 181.5 569C81.2603 569 0 487.74 0 387.5C0 353.244 9.49023 321.204 25.985 293.867L25.9688 293.875L141.512 77.5476C162.753 33.3052 207.123 2.2726 258.951 0.119583L258.959 0H264.719H390.999H508.5H509.999L510.002 0.00999319C551.85 0.567328 588.083 24.388 606.358 59.1292L606.359 59.125L703.969 241.602Z",
  fill: "currentColor"
}));
shapes['blur-2'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 1313 768",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M442.794 768C605.882 768 748.362 679.773 825.111 548.444L825.294 549C825.294 549 825.543 548.251 826.056 546.819C839.139 524.212 850.279 500.339 859.248 475.43C901.996 397.81 989.306 277.09 1144.29 206L1143.37 205.307C1230.34 171.296 1295.63 94.049 1312.83 0H1.29419V295.514C0.631105 305.423 0.294189 315.422 0.294189 325.5C0.294189 569.886 198.408 768 442.794 768Z",
  fill: "currentColor"
}));
shapes['blur-3'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 1738 487",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 0H1420.92C1420.92 0 2134.35 457.505 1420.92 485.868C707.502 514.231 0 0 0 0Z",
  fill: "url(#blur3_linear)"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
  id: "blur3_linear",
  x1: "0",
  y1: "0",
  x2: "1049.98",
  y2: "912.68",
  gradientUnits: "userSpaceOnUse"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
  "stop-color": "currentColor",
  "stop-opacity": "0.075"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
  offset: "1",
  "stop-color": "currentColor",
  "stop-opacity": "0"
}))));
shapes['blur-4'] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 803 662",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M207.979 612.772L209.325 612.086C208.738 612.056 208.163 612.021 207.561 611.952L207.979 612.772ZM437.227 489.348L436.33 489.804C437.32 489.769 436.632 490.12 437.227 489.348ZM264.245 578.472C264.764 577.551 264.303 577.879 264.281 577.468C264.265 577.804 264.257 578.137 264.245 578.472ZM336.298 541.759C336.318 541.42 336.333 541.084 336.353 540.745C335.823 540.827 335.298 540.908 334.787 541.027C335.297 541.284 335.788 541.503 336.298 541.759ZM334.048 542.906L333.44 541.713C333.192 541.981 332.971 542.281 332.745 542.584C333.179 542.691 333.61 542.8 334.048 542.906ZM226.258 596.325L225.354 596.786C226.348 596.749 225.663 597.098 226.258 596.325ZM282.046 568.885C283.138 568.141 282.504 569.168 283.207 567.825C283.432 567.522 283.658 567.22 283.902 566.954C283.071 567.19 282.251 567.42 281.439 567.693L282.046 568.885ZM228.304 594.767C228.465 594.357 228.614 593.905 228.782 593.491L227.886 593.948L228.304 594.767ZM214.822 600.604C214.807 600.94 214.806 601.316 214.79 601.653C215.313 600.683 214.823 601.073 214.822 600.604ZM320.445 546.27C321.816 547.12 321.94 547.244 322.576 548.234C323.194 547.591 323.816 546.945 324.427 546.306C323.833 546.233 323.246 546.204 322.663 546.172C322.975 544.512 321.89 545.675 320.445 546.27ZM274.23 571.366L274.439 571.776C276.22 570.822 274.978 571.501 276.484 570.218C276.399 570.777 276.307 571.34 276.195 571.866C278.267 570.388 277.477 570.603 277.867 568.481C276.838 568.677 275.801 568.877 274.753 569.035C274.921 570.92 275.197 569.889 274.23 571.366ZM219.953 599.538C219.764 598.79 219.552 598.006 219.356 597.262L219.503 599.767L219.953 599.538ZM256.943 578.626C257.492 577.689 256.995 578.083 256.976 577.577C256.979 577.951 256.959 578.289 256.943 578.626ZM474.257 467.383L474.699 467.157C474.557 467.605 474.389 468.02 474.221 468.434C474.24 468.095 474.256 467.759 474.257 467.383ZM474.152 470.533C476.419 468.768 476.552 469.029 475.395 466.287C474.586 466.558 473.763 466.79 472.954 467.061C473.079 469.485 473.889 468.509 474.152 470.533ZM466.533 473.383C466.553 473.045 466.55 472.671 466.569 472.332C467.373 472.439 468.185 472.542 468.996 472.644C468.165 472.88 467.338 473.114 466.533 473.383ZM463.62 474.351C463.338 474.166 463.034 473.946 462.752 473.761L463.656 473.3C463.637 473.639 463.64 474.013 463.62 474.351ZM464.395 471.422C463.779 473.191 460.263 474.466 458.907 476.237C459.401 476.829 459.891 477.424 460.382 478.019C462.561 476.345 462.148 476.603 464.436 475.953C463.945 475.734 463.435 475.478 462.932 475.218C464.339 475.017 465.745 474.817 467.14 474.575C466.272 474.361 465.385 474.109 464.524 473.891C466.14 473.724 467.771 473.597 469.394 473.426C469.786 472.007 469.572 473.149 469.23 472.009C469.398 471.595 469.548 471.143 469.716 470.729C470.845 471.749 470.745 471.847 472.091 472.052L470.857 469.631C472.387 470.26 471.163 469.569 472.143 471.041L473.525 469.304C468.443 469.407 467.869 470.966 464.395 471.422ZM401.299 504.557C400.874 505.571 400.92 504.75 400.447 504.006L398.647 504.923C398.67 506.413 398.912 505.398 398.35 506.575C399.339 507.432 398.109 507.261 399.88 507.344C399.865 507.681 399.845 508.019 399.848 508.393C400.334 507.113 400.813 505.837 401.299 504.557ZM372.524 518.233C371.141 519.595 369.774 520.995 368.392 522.356L367.766 521.127C367.653 522.404 367.525 523.642 367.424 524.914C368.102 524.709 368.032 524.416 368.067 525.055C369.729 523.223 369.197 524.433 368.601 522.766C370.198 522.515 370.095 521.817 371.932 522.617C375.589 521.27 375.883 521.59 375.147 518.914C376.694 519.816 375.958 520.331 377.333 519.865C377.333 519.865 377.916 519.897 377.819 518.585C378.623 518.692 379.434 518.794 380.227 518.86C380.106 517.842 379.27 518.362 380.271 517.852C379.583 515.012 375.366 517.301 372.524 518.233ZM365.93 523.094C365.568 522.762 365.211 522.429 364.868 522.134L365.476 523.326L365.93 523.094ZM331.544 539.114L332.778 541.535L330.837 539.943C330.33 540.06 329.801 540.143 329.29 540.262C329.533 542.109 329.202 541.339 330.29 543.319L329.84 543.548C329.27 542.806 328.703 542.063 328.133 541.321C326.42 541.959 326.28 542.171 323.889 543.014C323.974 544.707 323.726 543.613 322.278 544.304C323.668 544.816 325.047 545.286 326.437 545.798C327.096 544.618 327.163 544.161 327.2 542.828L327.647 542.601C327.977 544.215 328.261 543.273 327.377 544.287C327.734 544.621 328.096 544.953 328.434 545.249C329.763 544.244 329.334 544.228 330.897 544.511C331.593 543.265 332.587 542.946 333.473 540.664C333.34 540.028 333.224 539.431 333.091 538.794C332.581 538.914 332.055 538.994 331.544 539.114ZM317.705 548.698C316.759 548.055 317.077 547.658 315.784 547.144C315.656 548.382 315.528 549.62 315.426 550.892C317.745 551.775 315.443 550.742 318.078 550.526C317.283 550.086 316.491 549.645 315.696 549.206C316.736 549.38 317.753 549.519 318.785 549.697C319.719 547.907 318.339 548.61 320.377 548.37C320.264 546.503 319.613 547.679 320.445 546.27C320.084 545.938 319.727 545.604 319.384 545.309C317.757 547.265 318.447 547.147 317.705 548.698ZM297.444 559.022L296.818 557.793L298.139 558.152L297.444 559.022ZM313.269 548.894C312.799 550.26 313.221 548.872 311.678 550.221C310.554 551.169 310.659 550.787 311.167 552.546C309.033 552.46 310.52 552.454 308.912 553.695C308.872 552.871 308.824 552.051 308.765 551.189C308.113 551.381 307.434 551.539 306.775 551.734C306.663 552.26 306.571 552.823 306.486 553.383C304.902 552.923 304.343 553.958 303.026 555.614C303.045 555.605 303.071 555.639 303.086 555.631C303.038 555.656 303.001 555.675 302.953 555.699C302.49 556.263 301.954 556.912 301.254 557.597C301.93 555.751 300.732 556.831 302.953 555.699C302.982 555.684 302.997 555.63 303.026 555.614C300.73 554.767 299.244 555.383 299.731 556.824C297.757 556.657 299.274 557.574 297.773 556.321C293.143 559.29 294.174 558.389 291.589 562.005C291.549 561.181 291.509 560.357 291.468 559.533L289.218 560.68C288.653 561.437 288.11 562.229 287.571 563.02C287.571 563.02 279.713 566.32 278.145 566.791C277.995 567.243 277.827 567.657 277.658 568.071C278.317 568.251 278.98 568.43 279.639 568.611C280 568.943 280.357 569.276 280.7 569.571C280.872 568.263 280.7 568.726 280.326 567.744C281.45 567.218 282.841 566.932 282.822 565.956C284.323 566.411 283.534 566.25 284.754 567.505C288.501 564.376 286.539 565.095 290.814 564.934C290.267 564.228 289.697 563.486 289.127 562.744C293.321 564.126 293.669 561.462 295.765 562.412C296.156 560.852 296.016 562.049 295.19 560.17C298.123 560.694 304.876 556.22 305.469 556.951C305.972 555.897 305.741 555.076 306.244 554.022C306.271 556.308 313.156 552.33 315.374 551.904C315.258 551.306 315.125 550.67 315.008 550.072C314.422 549.667 313.855 549.299 313.269 548.894ZM264.891 573.075C264.876 573.411 264.856 573.75 264.847 574.082C265.094 574.098 265.322 574.075 265.549 574.053C265.62 573.971 265.675 573.849 265.752 573.762C265.309 573.049 266.165 573.458 264.891 573.075ZM450.078 482.284C450.078 481.908 450.094 481.571 450.114 481.233L450.556 481.007C450.399 481.416 450.227 481.832 450.078 482.284ZM427.8 493.119L427.591 492.709L428.528 491.199L427.8 493.119ZM420.808 497.198C420.748 496.712 420.692 496.224 420.632 495.739L422.154 496.511L420.808 497.198ZM419.457 497.885C419.447 497.515 419.467 497.177 419.486 496.838L419.936 496.609C419.768 497.023 419.599 497.438 419.457 497.885ZM410.927 501.199L410.51 500.38C411.302 500.914 411.009 500.266 410.927 501.199ZM455.134 476.611C455.886 477.682 456.039 478.214 455.479 479.532C455.75 477.939 455.13 478.958 453.715 479.398C454.241 478.942 454.779 478.527 455.306 478.071C455.024 477.886 454.739 477.703 454.435 477.483C451.688 479.164 453.293 478.534 451.914 480.316C451.93 479.979 451.931 479.603 451.939 479.27C450.065 478.865 450.96 481.036 449.721 479.368L449.001 481.284C447.275 482.586 448.442 482.366 446.575 480.972C443.962 482.162 444.846 481.993 442.33 482.665C442.069 483.643 441.808 484.62 441.555 485.594C442.818 485.185 441.603 485.1 443.114 485.316C440.157 486.823 441.717 484.854 438.851 486.972C439.172 486.48 439.47 485.952 439.783 485.464C439.799 485.127 439.819 484.789 439.816 484.415C439.309 484.533 438.787 484.611 438.28 484.729C436.612 486.845 433.653 488.025 429.721 489.09C430.66 490.207 430.682 490.618 429.608 492.198C429.709 491.301 429.821 490.4 429.911 489.463C428.003 490.482 427.757 489.621 427.624 491.66L427.017 490.468C422.628 495.519 417.33 495.825 411.864 499.69C411.96 499.125 412.052 498.562 412.153 498.041C410.996 499.1 409.854 500.197 408.709 501.297C408.478 501.274 406.845 501.168 407.568 502.395C406.475 502.107 405.385 501.818 404.292 501.53C404.048 501.795 403.823 502.098 403.605 502.397C405.105 502.618 403.894 502.531 405.141 502.083C404.747 502.8 404.354 503.517 403.967 504.23C403.911 503.742 403.851 503.257 403.795 502.769C401.579 504.931 403.964 504.278 401.231 506.656C401.588 506.99 401.949 507.322 402.288 507.619C403.879 506.245 407.246 504.107 407.499 504.494C408.934 503.154 408.186 503.019 408.022 502.164L409.822 501.246C409.523 502.619 409.729 502.185 408.648 503.393C410.382 504.011 409.888 503.418 412.402 502.982C410.505 501.603 412.291 502.194 412.072 500.1L412.969 499.643L413.994 501.655C415.725 500.444 415.767 500.564 415.432 498.904C417.725 498.017 424.291 498.801 425.345 493.853L425.791 493.626C425.755 494.301 425.746 495.009 425.711 495.684C427.651 494.931 426.186 494.879 427.72 495.177C427.503 493.833 427.536 494.567 426.45 493.807C429.384 493.156 429.447 492.608 432.224 492.882C432.393 492.468 432.554 492.057 432.722 491.643C433.841 489.195 433.19 490.794 436.33 489.804C435.725 489.737 435.142 489.706 434.555 489.677C437.409 488.317 441.466 487.047 443.93 486.918C444.039 486.018 444.151 485.116 444.252 484.22C448.664 484.74 454.113 478.726 456.994 480.261C457.769 478.693 457.823 479.323 457.106 477.154C457.692 477.559 458.259 477.927 458.845 478.332C459.06 476.675 458.139 476.909 457.637 474.866C456.797 475.435 455.969 476.044 455.134 476.611ZM277.003 567.889L277.45 567.661C277.096 567.325 276.757 567.029 276.396 566.697C276.38 567.033 276.36 567.372 276.344 567.708C276.569 567.782 276.797 567.853 277.003 567.889ZM486.947 458.9C484.604 460.656 485.01 460.45 482.442 461.195C483.149 462.665 483.087 461.523 482.362 463.253C482.302 462.768 482.264 462.317 482.204 461.832C479.992 463.522 479.865 463.962 477.7 464.127C477.214 465.031 476.744 465.975 476.266 466.875L477.101 468.515C478.632 467.969 479.392 467.816 480.493 466.27C481.413 465.098 480.749 466.093 479.866 465.041C482.016 465.306 481.158 464.946 482.257 466.404C484.66 463.396 485.321 461.511 486.911 459.95C486.911 459.575 486.927 459.238 486.947 458.9ZM261.001 576.558L262.802 575.641C261.712 577.088 262.786 576.493 261.001 576.558ZM258.776 576.66L259.23 576.428C259.588 576.762 259.949 577.094 260.307 577.428C259.016 577.148 259.976 577.597 258.776 576.66ZM272.499 570.184C271.561 570.615 272.401 570.187 272.012 571.464L272.43 572.284C271.787 571.767 271.151 571.246 270.489 570.692L268.239 571.838C268.749 572.094 269.259 572.351 269.762 572.611C267.414 573.244 268.619 572.583 267.065 573.985C267.166 573.089 267.278 572.187 267.387 571.287C266.83 572.134 266.231 572.955 265.752 573.762C265.798 573.833 265.869 573.937 265.952 574.035C265.822 574.055 265.699 574.071 265.549 574.053C265.118 574.789 264.807 575.511 264.779 576.182C263.065 575.413 263.525 575.038 262.143 575.46C260.945 575.132 260.15 575.631 258.378 575.877C258.151 578.808 258.956 577.601 257.57 579.855C255.661 578.857 256.968 578.426 255.63 578.263C255.195 578.156 254.761 578.048 254.327 577.941C253.639 578.808 252.925 579.641 252.238 580.507C251.819 580.064 251.386 579.581 250.968 579.137C250.686 580.266 250.529 580.252 249.775 581.246C251.386 581.88 251.013 581.46 251.298 582.019C252.547 582.649 259.171 580.119 264.281 577.468L264.292 577.462C264.292 577.462 264.292 577.462 264.281 577.468C267.736 575.66 270.508 573.826 270.421 572.791C272.036 573.469 271.236 573.408 272.405 573.329C273.296 572.218 273.301 573.341 273.125 571.413C274.22 570.62 273.957 571.318 274.508 569.676C272.909 569.693 273.916 569.509 272.499 570.184ZM248.183 582.573C244.163 582.463 243.345 586.117 240.817 584.825C240.424 585.166 240.046 585.546 239.679 585.921L240.913 588.342C241.264 588.304 241.641 588.3 242.018 588.295L240.974 586.246C242.504 586.875 241.28 586.184 242.26 587.656C243.076 586.02 243.168 587.709 242.983 585.739C244.009 586.436 244.369 585.69 243.61 586.968L243.819 587.378C245.601 585.625 244.972 586.837 244.341 585.047C246.559 584.949 245.242 584.682 246.069 586.231C248.091 585.389 248.061 584.982 249.626 585.404C251.265 582.598 248.695 584.377 251.715 582.838C250.268 582.215 248.814 581.595 247.367 580.971L248.183 582.573ZM195.542 608.41C196.053 608.291 196.571 608.214 197.082 608.095C197.25 607.68 197.419 607.266 197.587 606.852C197.061 606.932 196.531 607.014 196.021 607.134L195.542 608.41ZM225.712 593.038C225.938 591.89 225.739 592.226 225.539 591.577C225.596 592.064 225.656 592.55 225.712 593.038ZM362.928 520.542C363.064 521.176 363.177 521.775 363.313 522.41C363.527 521.222 364.085 521.36 362.928 520.542ZM215.148 597.904C215.522 597.526 215.9 597.146 216.293 596.804C215.079 595.875 216.065 596.311 214.763 596.036C215.048 596.219 215.349 596.441 215.634 596.624L213.859 596.496C214.296 596.977 214.71 597.423 215.148 597.904ZM504.54 448.903C502.006 449.631 502.197 449.674 502.923 451.275C502.587 451.775 494.011 454.409 493.738 454.407C493.407 455.561 488.115 460.604 486.38 462.238C486.662 462.423 486.966 462.644 487.248 462.829C487.003 463.094 486.778 463.396 486.553 463.699C489.9 461.055 489.962 460.835 492.022 458.847C491.854 459.261 491.704 459.713 491.543 460.123C493.275 458.537 493.078 459.107 492.773 456.963C496.706 455.663 497.454 455.329 499.886 455.357C500.423 453.863 500.601 454.663 500.219 452.653L501.112 452.198C501.172 452.684 501.22 453.128 501.276 453.616C502.9 453.492 504.518 451.683 506.279 450.082C507.216 450.918 506.973 449.54 507.661 448.345C506.331 448.319 505.009 448.335 503.679 448.309C503.98 448.531 504.266 448.714 504.54 448.903ZM425.731 489.058C426.28 488.121 425.764 488.478 425.764 488.009C425.767 488.383 425.747 488.721 425.731 489.058ZM276.457 564.601L276.248 564.191L274.902 564.877C276.34 565.364 274.941 565.092 276.457 564.601ZM510.193 445.506C509.908 445.323 509.626 445.138 509.322 444.918L509.739 445.738C507.662 446.562 507.96 445.987 508.356 447.474L507.453 447.935C510.246 448.295 511.141 446.806 511.993 444.589L514.838 445.721L514.42 444.901C514.646 444.599 514.89 444.333 515.108 444.034C512.671 443.023 512.025 443.4 510.193 445.506ZM312.036 546.473L310.721 546.11C311.075 546.446 311.433 546.78 311.794 547.112C311.867 546.887 311.963 546.698 312.036 546.473ZM307.531 548.768C307.7 548.354 307.868 547.939 308.017 547.488L306.965 548.024C306.947 548.127 306.922 548.234 306.889 548.344L307.531 548.768ZM515.891 441.102L514.899 443.625C515.842 442.065 515.667 443.937 516.184 445.035C517.927 442.551 518.018 443.162 517.237 440.416L515.891 441.102ZM490.668 453.954C490.709 454.402 490.769 454.888 490.825 455.375C492.03 453.823 491.504 455.357 491.564 453.497L490.668 453.954ZM459.143 470.016C459.128 470.352 459.108 470.691 459.092 471.027C459.77 470.869 460.449 470.712 461.101 470.52L460.494 469.328L459.143 470.016ZM443.087 479.699C443.785 479.202 444.453 478.674 445.132 478.14C444.698 478.033 444.264 477.926 443.83 477.819L443.123 478.648C443.122 479.024 443.106 479.36 443.087 479.699ZM318.637 541.608L319.453 543.209C319.823 542.833 320.217 542.492 320.594 542.112C319.932 541.933 319.273 541.753 318.637 541.608ZM300.619 550.788C302.016 551.296 302.034 551.193 303.93 550.603L302.818 550.653C303.181 549.013 301.368 550.594 300.619 550.788ZM498.567 449.412C499.303 449.366 500.031 449.323 500.766 449.277L500.577 448.905C499.898 449.063 499.227 449.217 498.567 449.412ZM480.257 460.243C480.352 460.054 480.425 459.829 480.502 459.603C480.068 459.495 479.633 459.388 479.199 459.281C479.104 459.47 479.031 459.695 478.954 459.922L479.144 460.294L480.257 460.243ZM472.894 462.493C472.875 462.831 472.859 463.168 472.839 463.507C473.594 463.498 474.329 463.452 475.065 463.405C473.554 462.767 474.306 462.524 472.894 462.493ZM323.324 539.689L324.681 538.997C324.095 538.967 323.512 538.936 322.925 538.906L323.324 539.689ZM315.193 544.864C315.138 543.578 314.77 544.657 315.672 543.587C315.238 543.48 314.804 543.373 314.377 543.262C314.133 543.527 313.908 543.83 313.682 544.132C314.866 545.03 313.914 544.624 315.193 544.864ZM287.965 558.221L288.408 557.995C288.046 557.663 287.715 557.363 287.358 557.029L287.965 558.221ZM494.758 450.837C494.514 451.102 494.285 451.406 494.059 451.709C494.493 451.816 494.931 451.922 495.365 452.029C495.751 451.692 496.129 451.312 496.522 450.97C495.92 450.902 495.334 450.872 494.758 450.837ZM276.336 562.129C277.329 562.092 276.637 562.444 277.232 561.672L276.336 562.129ZM263.276 568.783C263.088 569.536 262.93 570.32 262.742 571.073C264.043 569.424 263.487 569.849 263.276 568.783ZM195.695 604.25C194.086 605.727 194.361 605.164 194.257 607L196.093 605.032C196.182 604.471 196.297 603.943 196.378 603.385C195.86 603.461 195.334 603.542 194.823 603.661C195.105 603.846 195.39 604.029 195.695 604.25ZM261.685 570.11L263.031 569.424C262.578 569.279 262.151 569.168 261.717 569.061C261.701 569.398 261.681 569.736 261.685 570.11ZM192.814 604.169L192.119 605.039C192.534 605.485 192.971 605.966 193.385 606.412C193.673 605.092 193.883 605.173 192.814 604.169ZM226.383 586.548C226.364 586.887 226.367 587.261 226.347 587.599L227.251 587.139C226.969 586.954 226.665 586.733 226.383 586.548ZM216.471 591.599L214.67 592.516C215.349 592.358 216.008 592.163 216.679 592.009L216.471 591.599ZM346.208 524.462L345.304 524.923C346.293 524.888 345.632 525.272 346.208 524.462ZM262.405 568.194C262.957 567.256 262.441 567.613 262.441 567.144C262.44 567.519 262.424 567.856 262.405 568.194ZM254.476 573.783C256.148 572.321 255.465 572.763 257.875 571.535C255.812 570.897 256.128 571.674 255.24 570.813L255.002 570.934C254.782 571.093 254.564 571.252 254.352 571.406C254.388 572.185 254.424 572.964 254.476 573.783ZM519.404 441.329C519.419 440.993 519.439 440.654 519.436 440.281L519.89 440.049C519.74 440.501 519.572 440.915 519.404 441.329ZM521.27 439.346C521.289 439.383 521.289 439.384 521.308 439.421C521.582 439.61 521.83 439.765 522.108 439.952C521.017 439.522 521.411 439.743 521.308 439.421C521.281 439.387 521.263 439.397 521.236 439.363C521.244 439.359 521.262 439.35 521.27 439.346C521.239 439.268 521.182 439.156 521.028 438.954C519.925 439.374 518.793 439.764 517.691 440.184C518.643 441.529 518.037 440.946 517.812 442.656C520.488 442.466 520.528 441.32 523.872 440.085C523.654 438.085 522.908 439.168 524.186 437.344C524.499 438.217 523.719 437.864 524.603 438.164C524.224 439.718 526.411 438.181 527.717 437.609C528.132 436.225 528.07 437.383 527.091 436.38L533.396 433.168C532.687 432.872 531.949 432.544 531.229 432.254C533.501 431.472 533.439 431.644 535.701 431.008C535.794 430.444 535.887 429.881 535.979 429.318C534.79 429.22 533.621 429.158 532.44 429.056C532.247 432.955 523.905 436.877 521.27 439.346ZM521.36 436.25L521.151 435.84L519.376 435.713C519.886 435.969 520.396 436.225 520.906 436.481L521.36 436.25ZM263.579 566.048C263.798 566.828 263.987 567.576 264.18 568.322C264.68 568.209 265.209 568.126 265.735 568.046C265.016 567.38 264.298 566.714 263.579 566.048ZM537.208 426.157C537.652 429.263 535.955 426.467 537.293 429.68L538.651 428.989C538.865 428.692 539.094 428.387 539.335 428.124C539.053 427.939 538.752 427.717 538.467 427.534C538.269 426.227 538.344 426.705 537.208 426.157ZM380.934 505.783L380.03 506.244C381.004 506.17 380.339 506.556 380.934 505.783ZM278.554 562.031C279.874 562.25 279.926 561.801 281.66 561.433C281.487 560.349 281.303 559.27 281.11 558.147C280.009 558.193 278.892 558.245 277.806 558.329C277.096 559.676 277.738 558.646 276.642 559.392C277.614 560.398 279.912 559.556 278.554 562.031ZM256.795 570.537C258.086 570.817 257.13 570.366 258.325 571.305C259.486 570.761 258.831 571.001 260.334 570.798C259.099 569.503 258.467 568.934 257.487 568.87C257.32 569.002 257.169 569.173 256.998 569.307C256.927 569.719 256.866 570.125 256.795 570.537ZM396.485 497.343L397.093 498.535C396.974 497.328 397.968 497.292 396.485 497.343ZM464.883 463.478L465.337 463.247C464.995 462.952 464.637 462.618 464.276 462.286L464.883 463.478ZM222.863 586.324C223.386 585.354 222.896 585.744 222.896 585.275C222.88 585.612 222.86 585.95 222.863 586.324ZM244.511 574.262L244.064 574.489C243.176 576.819 244.156 575.71 244.603 577.781C245.225 577.136 245.817 576.459 246.439 575.813C245.711 573.932 246.301 573.913 244.752 573.623C244.716 574.298 244.7 575.01 244.672 575.681C244.634 575.231 244.567 574.749 244.511 574.262ZM539.636 419.805C540.146 420.062 540.656 420.318 541.148 420.537C540.166 419.677 541.404 419.89 539.636 419.805ZM568.697 404.482C569.566 404.696 570.453 404.948 571.314 405.167C566.486 405.843 565.55 408.244 562.123 409.38C561.756 410.74 562.674 410.601 561.794 412.082C564.406 412.722 569.457 405.596 572.812 406.984C573.348 404.505 572.462 405.379 574.681 403.967C571.901 402.944 572.287 403.545 568.697 404.482ZM566.238 405.219C566.174 405.158 566.121 405.091 566.08 405.065C566.02 405.049 565.979 405.069 565.949 405.084C566.043 405.13 566.13 405.18 566.238 405.219ZM596.32 386.325C597.313 386.288 596.648 386.674 597.224 385.865L596.32 386.325ZM602.741 380.003C602.805 380.487 602.846 380.935 602.902 381.423C603.424 381.345 603.95 381.264 604.461 381.145C603.771 379.478 604.089 380.865 604.095 379.313L602.741 380.003ZM632.196 359.881L631.3 360.337C631.284 360.674 631.264 361.012 631.267 361.386C632.341 360.182 631.807 361.112 632.196 359.881ZM632.474 358.191C632.381 358.754 632.289 359.317 632.196 359.881C632.726 359.799 633.233 359.681 633.763 359.599C632.839 358.098 633.895 358.921 632.474 358.191ZM678.014 327.338C678.24 327.035 678.484 326.77 678.71 326.468C679.087 326.463 679.445 326.421 679.822 326.417L677.838 325.879C677.898 326.365 677.954 326.852 678.014 327.338ZM758.93 241.203C759.549 240.184 760.49 240.127 759.294 239.563C759.272 239.621 759.235 239.64 759.194 239.661C759.104 240.175 759.019 240.688 758.93 241.203ZM116.404 565.536L115.5 565.997C116.493 565.96 115.809 566.308 116.404 565.536ZM114.099 567.696C114.267 567.282 114.435 566.868 114.604 566.453L113.7 566.914L114.099 567.696ZM113.403 568.567L113.005 567.785L112.109 568.241C112.543 568.348 112.977 568.456 113.403 568.567ZM99.677 557.213C100.678 557.173 99.986 557.525 100.581 556.753L99.677 557.213ZM787.455 191.429C787.841 190.247 788.418 190.891 787.298 190.007C787.358 190.493 787.414 190.98 787.455 191.429ZM89.23 546.723L88.603 545.494L87.253 546.182C87.313 546.667 87.369 547.155 87.429 547.64C87.655 547.338 87.88 547.036 88.125 546.77C88.483 546.729 88.86 546.724 89.23 546.723ZM84.368 540.519C83.842 540.6 83.32 540.678 82.813 540.796C84.037 541.204 82.946 541.103 84.577 540.929L84.368 540.519ZM82.326 542.076L82.776 541.846C82.419 541.512 82.057 541.18 81.7 540.846L82.326 542.076ZM83.533 538.88C83.44 539.443 83.348 540.007 83.263 540.567C83.896 539.493 84.905 539.495 83.533 538.88ZM82.186 539.566C82.167 539.905 82.17 540.279 82.15 540.617L83.054 540.157C82.772 539.972 82.468 539.751 82.186 539.566ZM762.275 190.416C762.309 190.446 762.343 190.475 762.377 190.505C762.414 190.439 762.399 190.447 762.275 190.416ZM80.567 535.277C80.115 536.586 80.639 535.803 79.177 537.017L79.386 537.427L80.29 536.966C80.724 537.074 81.177 537.218 81.611 537.326C81.624 536.991 81.621 536.617 81.64 536.278C81.733 535.715 81.825 535.152 81.918 534.589L80.567 535.277ZM35.2026 426.206C35.2057 426.58 35.1861 426.918 35.1702 427.255C35.4518 427.44 35.7562 427.66 36.0378 427.845C36.2558 427.547 36.5001 427.281 36.7254 426.979C36.6811 426.579 36.6292 426.183 36.5774 425.787C36.3907 425.788 36.2003 425.792 36.0135 425.793L35.2026 426.206ZM34.9939 425.796L34.0899 426.257C35.0832 426.22 34.4178 426.606 34.9939 425.796ZM33.0649 424.245L31.2646 425.162C31.55 425.346 31.8508 425.568 32.1361 425.751C32.4459 425.265 32.7477 424.735 33.0649 424.245ZM31.9885 423.245C31.9878 423.621 31.972 423.958 31.9524 424.296L32.8562 423.836C32.5745 423.651 32.2891 423.467 31.9885 423.245ZM767.664 194.897C765.3 193.943 764.443 192.362 762.377 190.505C762.351 190.565 762.3 190.685 762.291 191.018L761.874 190.198C762.061 190.337 762.181 190.37 762.275 190.416C761.636 189.85 760.88 189.25 759.945 188.647C762.929 187.643 763.993 189.869 766.133 188.544C766.427 190.647 766.878 189.197 765.595 190.836L767.846 189.689C768.701 190.99 769.533 192.255 770.369 193.519C768.358 193.793 769.323 193.489 767.664 194.897ZM758.206 187.468C758.732 187.388 759.243 187.269 759.769 187.189C758.48 188.127 759.67 187.896 758.206 187.468ZM750.04 211.525C749.815 211.828 749.581 212.087 749.356 212.39L748.485 211.801L748.73 211.16C749.107 211.156 749.473 211.157 749.831 211.115L750.04 211.525ZM746.893 213.129C746.913 212.79 746.929 212.453 746.926 212.08L747.372 211.852C747.222 212.304 747.062 212.714 746.893 213.129ZM743.083 214.553L743.128 213.546L743.581 213.314C743.413 213.729 743.245 214.143 743.083 214.553ZM727.075 210.979C727.095 210.64 727.111 210.304 727.112 209.928C727.131 210.482 727.662 210.07 727.075 210.979ZM743.142 255.864C743.347 254.399 743.297 255.597 742.981 254.444L743.431 254.215C743.554 255.513 744.109 254.386 743.142 255.864ZM657.363 103.099C649.811 101.317 644.226 91.2581 637.148 93.504C637.393 92.863 637.638 92.2219 637.879 91.5828C635.164 92.0747 636.107 91.829 633.444 91.7785C632.306 90.6219 633.399 90.8627 632.419 89.7667C634.96 89.4573 657.391 96.4691 660.129 99.6258C660.129 99.6258 659.217 101.873 657.363 103.099ZM658.018 103.282C659.29 103.525 658.33 103.076 659.529 104.013C659.019 103.757 658.528 103.538 658.018 103.282ZM643.436 96.9165L642.81 95.6872L643.253 95.4616C643.32 95.9434 643.376 96.4309 643.436 96.9165ZM631.27 90.8682L630.643 89.6389C631.157 89.8933 631.663 90.1515 632.177 90.4058L631.27 90.8682ZM719.028 268.667C719.272 268.401 719.498 268.099 719.723 267.796L721.07 267.11C720.513 268.426 720.662 268.444 719.028 268.667ZM628.063 87.9036C627.141 89.312 627.994 88.5957 626.263 88.8209L628.063 87.9036ZM669.7 331.058L669.247 331.289C669.134 330.69 668.998 330.055 668.884 329.456C669.09 329.492 669.318 329.563 669.543 329.637C669.584 330.085 669.64 330.572 669.7 331.058ZM667.9 331.975L667.483 331.156C668.271 331.692 667.982 331.042 667.9 331.975ZM668.073 333.436C668.092 333.097 668.089 332.723 668.109 332.385C668.128 332.938 668.648 332.486 668.073 333.436ZM666.518 333.712L665.682 332.073C666.116 332.556 666.534 333 666.968 333.483L666.518 333.712ZM664.926 335.039C664.148 334.966 664.678 334.415 663.367 335.318C663.452 334.758 663.544 334.194 663.637 333.631C664.315 333.473 664.994 333.315 665.646 333.124C665.405 333.763 665.167 334.4 664.926 335.039ZM664.681 335.68C665.192 335.561 665.718 335.48 666.24 335.402C664.955 336.338 666.149 336.105 664.681 335.68ZM657.183 341.002C655.77 340.408 656.558 340.851 655.913 339.631C656.351 339.737 656.785 339.844 657.238 339.989C657.219 340.327 657.203 340.663 657.183 341.002ZM655.443 346.487L653.642 347.405C653.377 346.507 653.12 345.653 652.851 344.758C651.763 345.5 652.004 345.33 651.018 346.724C650.936 345.265 650.886 345.665 649.946 345.722C649.792 343.83 650.055 344.869 651.537 344.395C651.789 342.765 651.726 343.782 650.966 342.152C653.013 342.564 653.058 343.057 654.209 344.066C653.473 344.112 652.738 344.159 651.991 344.164C653.137 344.941 654.29 345.714 655.443 346.487ZM652.702 348.916L652.285 348.096C653.077 348.631 652.788 347.981 652.702 348.916ZM649.496 345.951C648.222 346.413 646.599 347.991 647.363 349.572C645.335 348.728 646.407 347.384 645.975 345.727C647.095 345.673 646.912 345.626 647.523 345.408C647.237 345.225 646.952 345.042 646.67 344.857C647.029 344.815 647.398 344.815 647.776 344.81C648.001 344.508 648.226 344.205 648.471 343.94L649.496 345.951ZM649.519 351.57C648.092 351.077 648.527 350.856 647.571 349.982L649.592 349.469C649.571 350.183 649.536 350.858 649.519 351.57ZM648.381 352.666C646.947 352.599 645.74 353.027 644.118 354.322C644.882 352.291 644.806 352.141 645.98 351.309L645.562 350.49L647.546 351.027L648.381 352.666ZM642.017 351.31C640.615 350.758 641.658 351.259 640.937 350.312C640.467 350.88 640.024 351.481 639.554 352.049L638.51 350L639.86 349.312C640.823 349.713 641.768 350.077 642.705 350.444C641.647 350.842 642.266 350.292 642.017 351.31ZM643.423 355.192C639.782 359.394 632.836 359.977 631.777 365.725C631.058 365.059 630.339 364.393 629.621 363.727C629.889 364.622 630.155 365.52 630.423 366.415C628.334 365.321 629.859 365.013 627.996 366.103C626.829 363.6 628.574 364.964 625.866 364.138C627.799 363.388 626.494 363.724 628.508 363.778L627.692 362.176C628.656 362.201 629.616 362.228 630.572 362.257C630.217 360.326 629.717 361.754 631.3 360.337C629.774 360.083 631.004 360.207 629.737 360.617C629.452 360.434 629.17 360.249 628.873 360.025C629.921 359.866 630.958 359.667 631.987 359.471C631.576 358.507 631.63 358.198 631.648 356.828C631.495 356.812 631.3 356.771 631.121 356.768C630.545 357.109 631.341 357.126 630.095 356.869C630.475 356.816 630.811 356.785 631.121 356.768C631.24 356.707 631.408 356.669 631.657 356.589C631.658 356.682 631.651 356.733 631.648 356.828C633.619 357.044 634.441 358.502 634.868 359.551C635.797 358.046 636.737 356.535 637.666 355.029C638.043 355.024 638.42 355.02 638.779 354.978L637.842 356.488C638.501 356.668 639.164 356.846 639.823 357.027C638.8 356.703 639.659 356.641 640.51 356.161L639.466 354.112C640.129 354.29 640.788 354.471 641.45 354.649L640.425 352.638L640.868 352.412C642.908 352.921 642.196 352.72 643.423 355.192ZM624.006 360.487C624.734 360.445 625.47 360.399 626.205 360.352L626.414 360.762C625.509 361.598 624.597 362.392 623.674 363.191C623.786 362.289 623.894 361.389 624.006 360.487ZM626.458 359.754L627.362 359.294C627.647 359.477 627.929 359.662 628.214 359.845L627.274 361.356C626.782 359.589 627.72 361.035 626.458 359.754ZM629.857 357.506C628.569 358.444 629.758 358.213 628.295 357.786C628.802 357.669 629.331 357.586 629.857 357.506ZM633.318 353.162L633.764 352.935C633.615 353.386 633.454 353.797 633.285 354.211C633.301 353.874 633.321 353.536 633.318 353.162ZM635.982 352.837C635.52 353.401 635.069 354.006 634.599 354.574C634.584 353.174 634.581 353.738 634.214 352.705C634.82 352.772 635.403 352.804 635.982 352.837ZM637.79 351.916C638.217 352.027 638.67 352.171 639.104 352.279C638.935 352.693 638.767 353.107 638.625 353.555L638.171 353.786C638.039 352.211 638.131 352.962 637.79 351.916ZM641.661 348.395L642.111 348.166C641.961 348.617 641.793 349.032 641.632 349.442C641.651 349.104 641.66 348.771 641.661 348.395ZM644.095 348.703C645.304 349.964 643.543 349.782 644.93 350.343L645.12 350.715C644.46 350.91 643.782 351.068 643.122 351.264C643.44 350.398 643.777 349.569 644.095 348.703ZM643.999 345.186C644.493 345.779 644.983 346.374 645.477 346.966C645.192 346.783 644.91 346.598 644.625 346.415C644.381 346.681 644.155 346.983 643.911 347.248C643.947 346.573 643.963 345.861 643.999 345.186ZM626.109 369.083L625.501 367.891C625.935 367.998 626.37 368.105 626.823 368.25C626.578 368.515 626.353 368.817 626.109 369.083ZM619.317 367.992C618.522 367.177 617.746 366.399 616.951 365.584C617.69 365.911 618.405 366.204 619.144 366.531C619.2 367.019 619.26 367.504 619.317 367.992ZM615.656 365.258C615.874 364.96 616.099 364.657 616.344 364.392L616.798 364.16C616.262 365.325 617.152 365.059 615.656 365.258ZM615.741 368.781C615.91 367.991 616.098 367.238 616.263 366.45L616.706 366.225C616.555 368.319 617.116 367.001 615.741 368.781ZM613.736 369.287C613.752 368.95 613.748 368.576 613.768 368.238L614.222 368.007C614.05 368.423 613.9 368.874 613.736 369.287ZM611.305 368.976C611.325 368.638 611.341 368.302 611.341 367.926C611.384 368.514 611.891 368.068 611.305 368.976ZM610.168 370.073C610.686 369.996 611.197 369.876 611.723 369.796C610.434 370.734 611.624 370.503 610.168 370.073ZM607.913 371.221C607.857 370.734 607.797 370.248 607.741 369.761L609.541 368.843C608.995 369.638 608.452 370.43 607.913 371.221ZM608.507 373.499C608.447 373.014 608.391 372.526 608.331 372.041C609.212 372.859 608.669 372.291 608.507 373.499ZM607.636 372.911C607.411 372.838 607.202 372.804 606.977 372.731L606.531 372.958C606.488 372.792 606.484 372.7 606.456 372.573C606.198 372.517 605.94 372.461 605.663 372.368C606.589 372.365 606.408 372.082 606.456 372.573C606.632 372.624 606.808 372.676 606.977 372.731L607.427 372.501L607.636 372.911ZM605.096 375.706L603.296 376.624C603.248 376.179 603.191 375.692 603.131 375.206C603.417 375.389 603.698 375.574 604.003 375.794L604.907 375.334L605.096 375.706ZM604.819 377.396C604.385 377.289 603.951 377.182 603.505 377.033L605.305 376.116C605.156 376.568 604.987 376.982 604.819 377.396ZM600.556 379.052L601.906 378.364C600.846 379.421 602.032 379.145 600.556 379.052ZM598.547 379.56C598.639 378.996 598.751 378.47 598.843 377.907C599.194 377.869 599.571 377.865 599.948 377.86C599.989 378.309 600.046 378.796 600.106 379.282C599.602 379.397 599.076 379.478 598.547 379.56ZM597.373 381.706C596.655 380.336 597.916 381.477 596.991 379.836L598.305 380.199C597.984 380.691 597.694 381.214 597.373 381.706ZM595.634 380.528L595.026 379.336L595.48 379.105C595.536 379.592 595.596 380.078 595.634 380.528ZM595.122 382.853L594.097 380.842C594.737 380.985 595.392 381.167 596.051 381.348C595.734 381.838 595.439 382.363 595.122 382.853ZM594.937 388.062C594.09 388.634 593.269 389.24 592.442 389.85L592.024 389.03L591.128 389.487C591.864 388.127 590.707 388.716 592.269 388.389C592.209 387.904 592.153 387.416 592.093 386.931C593.906 387.133 592.805 385.817 594.765 386.602C594.617 387.334 594.072 386.907 594.937 388.062ZM589.139 383.368L589.329 383.74C587.82 384.228 589.282 384.374 587.793 384.054L589.139 383.368ZM590.2 384.329C590.786 384.734 591.353 385.102 591.939 385.507C592.221 385.692 592.506 385.875 592.781 386.064C592.506 385.875 592.221 385.692 591.939 385.507C590.623 385.38 590.832 386.259 590.2 384.329ZM586.93 389.045C586.125 389.315 585.298 389.548 584.486 389.821C584.185 389.599 583.9 389.416 583.625 389.227C585.103 388.991 583.583 388.123 584.972 388.541C585.379 387.161 584.979 387.552 584.824 386.036L586.182 385.344C586.141 386.679 586.198 387.729 586.93 389.045ZM582.026 390.558L582.721 389.688L583.171 389.459C582.628 390.627 583.53 390.355 582.026 390.558ZM580.954 389.556L581.4 389.329C581.239 389.739 581.09 390.191 580.921 390.605C580.937 390.269 580.938 389.893 580.954 389.556ZM581.339 391.425C581.094 391.69 580.869 391.993 580.625 392.258C580.339 392.075 580.054 391.892 579.779 391.703C579.845 391.482 579.922 391.255 580.017 391.066C580.375 391.024 580.753 391.019 581.13 391.015L581.339 391.425ZM577.683 394.273C577.494 393.525 577.301 392.778 577.112 392.03C577.84 391.987 578.575 391.941 579.329 391.932C578.783 392.727 578.218 393.484 577.683 394.273ZM575.509 393.363C575.529 393.024 575.529 392.649 575.545 392.312L575.995 392.083C575.831 392.495 575.681 392.947 575.509 393.363ZM571.1 399.175L569.509 400.502C569.449 400.017 569.393 399.529 569.333 399.043C569.862 398.961 570.369 398.844 570.892 398.765L571.1 399.175ZM567.741 400.371C567.685 399.883 567.625 399.398 567.569 398.91L568.011 398.685C567.926 399.244 567.834 399.807 567.741 400.371ZM567.046 401.241C566.511 402.03 565.965 402.824 565.422 403.617C565.028 402.081 564.685 402.585 563.273 401.615C564.733 401.152 565.138 400.43 566.837 400.831C566.311 400.912 565.808 401.027 565.282 401.107C566.459 401.634 565.466 402.14 567.046 401.241ZM561.613 405.042L560.986 403.813C562.277 404.093 561.317 403.644 562.517 404.581L561.613 405.042ZM560.87 406.922C560.889 406.583 560.905 406.247 560.917 405.912L561.367 405.683C561.199 406.097 561.038 406.508 560.87 406.922ZM559.395 405.139L558.977 404.32C559.751 404.817 559.469 404.21 559.395 405.139ZM558.86 407.429C558.635 407.732 558.41 408.035 558.166 408.3C558.221 407.286 558.253 406.237 558.282 405.19C558.471 405.939 558.671 406.681 558.86 407.429ZM558.913 412.001L559.367 411.77C559.725 412.104 560.086 412.436 560.443 412.77L558.193 413.917L557.984 413.507C559.065 412.299 558.543 413.27 558.913 412.001ZM555.67 410.087C556.389 410.753 557.108 411.419 557.808 412.048L558.017 412.458C556.963 413.37 555.898 414.241 554.834 415.112C555.104 413.426 555.4 411.773 555.67 410.087ZM552.374 415.849C552.089 415.666 551.807 415.481 551.503 415.261C551.973 414.693 552.435 414.129 552.905 413.561C553.339 413.668 553.773 413.776 554.207 413.883L554.416 414.293C552.724 415.202 553.582 414.577 552.374 415.849ZM547.444 411.745C548.172 411.703 548.907 411.656 549.662 411.647C549.703 412.095 549.759 412.583 549.819 413.069C547.918 412.676 549.368 413.58 547.444 411.745ZM549.758 415.165L549.34 414.345C550.103 414.848 549.832 414.235 549.758 415.165ZM551.471 416.31L550.992 417.586C550.763 417.515 550.558 417.478 550.329 417.407C550.349 417.069 550.365 416.732 550.365 416.357L551.262 415.9L551.471 416.31ZM550.386 409.73L550.836 409.501L551.462 410.73C551.009 410.585 550.575 410.478 550.141 410.371C550.217 410.144 550.309 409.957 550.386 409.73ZM552.765 411.052C554.203 411.539 552.672 411.099 552.941 412.51C551.222 411.556 552.412 412.264 551.707 410.089C553.09 410.604 552.036 410.109 552.765 411.052ZM553.749 408.533C554.477 408.49 555.212 408.444 555.966 408.435L555.063 408.895C555.348 409.078 555.63 409.263 555.915 409.446L553.507 409.172C553.58 408.947 553.657 408.72 553.749 408.533ZM548.738 418.735C547.574 417.544 548.585 418.765 548.159 416.495C549.775 416.751 548.718 416.774 549.879 417.637C548.731 418.409 549.699 417.541 548.738 418.735ZM550.45 419.88L550.052 419.097C550.825 419.595 550.536 418.944 550.45 419.88ZM541.895 424.239C542.232 423.41 542.55 422.544 542.879 421.72C543.83 420.203 545.027 420.859 546.025 419.131L545.407 418.883C545.635 418.954 545.86 419.027 546.07 419.062C546.063 419.112 546.048 419.119 546.025 419.131L548.251 420.015C545.072 420.79 543.878 421.961 541.895 424.239ZM545.258 423.041C545.278 422.703 545.294 422.366 545.313 422.028L545.756 421.802L545.258 423.041ZM543.453 418.377L543.896 418.151L544.503 419.344C543.076 418.897 544.311 419.536 543.453 418.377ZM544.591 417.281C545.177 417.311 545.76 417.342 546.359 417.413C545.218 418.181 546.178 417.317 545.198 418.473L544.591 417.281ZM545.106 414.954C545.35 414.689 545.575 414.386 545.801 414.084L546.251 413.854C547.032 415.286 546.618 414.418 548.191 415.446C547.315 415.565 546.408 415.652 545.524 415.774L545.106 414.954ZM537.415 419.905C537.358 419.418 537.298 418.932 537.242 418.444L537.696 418.213C537.815 419.514 538.389 418.424 537.415 419.905ZM537.302 423.013L536.848 423.244C536.642 423.208 536.418 423.135 536.189 423.063C536.209 422.725 536.225 422.389 536.241 422.052L537.148 421.589C537.205 422.077 537.246 422.525 537.302 423.013ZM534.513 420.868L534.955 420.642C535.317 420.974 535.674 421.308 536.032 421.642C535.791 421.905 535.562 422.21 535.348 422.507L534.513 420.868ZM535.252 418.989L534.304 420.458C533.943 420.126 533.6 419.831 533.243 419.497C534.728 419.35 534.112 419.382 535.252 418.989ZM526.094 427.738C526.733 425.582 526.588 427.439 525.082 424.64C525.311 424.711 525.536 424.785 525.745 424.819C527.368 425.024 525.457 425.669 527.927 425.772C527.308 426.415 526.693 427.057 526.094 427.738ZM525.142 429.209C525.447 429.429 525.728 429.613 526.014 429.797C524.445 430.737 525.725 430.507 524.239 429.669L525.142 429.209ZM520.754 428.394C521.566 428.497 522.377 428.6 523.181 428.706C521.189 429.017 522.251 429.18 520.754 428.394ZM520.847 431.913C521.281 432.021 521.734 432.165 522.161 432.276C521.581 433.51 521.555 432.632 520.847 431.913ZM517.275 432.701C517.291 432.364 517.31 432.026 517.326 431.689C517.612 431.872 517.893 432.057 518.179 432.24L517.275 432.701ZM515.028 433.846C514.179 433.293 513.308 432.704 512.44 432.114C515.094 430.996 513.904 432.025 515.144 430.736C515.108 431.787 515.076 432.836 515.028 433.846ZM515.474 433.618C515.49 433.282 515.51 432.943 515.526 432.607L515.98 432.375C515.811 432.79 515.643 433.204 515.474 433.618ZM513.368 437.272C512.332 437.096 511.318 436.956 510.282 436.78C510.185 435.844 510.069 434.871 509.945 433.902C510.701 435.018 510.898 434.402 510.334 435.768C513.122 436.928 512.606 435.502 514.718 436.584L513.368 437.272ZM509.108 438.927C510.625 438.905 510.213 438.41 511.985 439.009C511.025 438.982 510.061 438.957 509.108 438.927ZM509.021 440.989L506.766 442.137C507.027 441.16 507.288 440.182 507.542 439.208C507.976 439.316 508.429 439.46 508.863 439.567C508.923 440.053 508.98 440.541 509.021 440.989ZM503.849 437.524L504.299 437.295C504.131 437.709 503.97 438.12 503.82 438.571C503.821 438.195 503.837 437.859 503.849 437.524ZM501.393 438.259C501.973 438.292 502.574 438.361 503.161 438.39C501.545 438.557 502.622 438.665 501.393 438.259ZM504.07 443.512C503.957 442.912 503.813 442.282 503.7 441.682C504.134 441.79 504.568 441.897 505.021 442.041C504.7 442.533 504.383 443.023 504.07 443.512ZM505.448 436.193L505.89 435.968C505.729 436.378 505.58 436.83 505.411 437.244C505.431 436.905 505.428 436.532 505.448 436.193ZM502.072 444.06C502.073 443.684 502.089 443.348 502.108 443.009L503.012 442.549C502.611 443.785 503.172 442.843 502.072 444.06ZM500.517 444.337L499.167 445.025L498.749 444.205C499.127 443.825 499.513 443.487 499.89 443.107L500.794 442.646C500.702 443.21 500.609 443.773 500.517 444.337ZM498.203 440.917C498.637 441.024 499.071 441.131 499.524 441.276L498.178 441.962C498.167 441.592 498.187 441.253 498.203 440.917ZM496.792 449.284L496.375 448.465C496.267 450.35 495.884 447.777 495.559 446.863L496.916 446.171C496.861 447.185 496.825 448.236 496.792 449.284ZM494.036 446.09L493.219 444.488C493.638 444.932 494.071 445.415 494.489 445.859L494.036 446.09ZM492.235 447.007L491.609 445.778C492.139 445.696 492.657 445.62 493.168 445.5C492.866 446.029 492.556 446.515 492.235 447.007ZM491.364 446.419C489.93 445.977 491.175 446.609 490.306 445.457L490.757 445.227L491.364 446.419ZM487.486 449.944C486.807 450.102 486.155 450.293 485.477 450.451L484.85 449.222L486.201 448.534C486.928 449.805 485.85 449.041 487.277 449.534L487.486 449.944ZM485.99 454.788C485.461 454.87 484.954 454.988 484.424 455.07C484.818 454.353 485.211 453.636 485.598 452.923L486.711 452.873C486.469 453.512 486.224 454.153 485.99 454.788ZM482.503 453.515C482.049 453.371 481.615 453.264 481.181 453.156C481.258 452.93 481.349 452.742 481.426 452.515L483.226 451.598C482.981 452.239 482.748 452.874 482.503 453.515ZM482.623 455.987C480.701 455.7 480.875 455.048 480.493 454.023C481.149 454.205 481.807 454.386 482.451 454.527C482.507 455.014 482.567 455.5 482.623 455.987ZM484.573 450.912C483.226 451.129 482.384 451.417 481.25 451.056C482.355 451.009 483.468 450.959 484.573 450.912ZM485.199 452.141L484.782 451.322C485.555 451.819 485.285 451.206 485.199 452.141ZM477.789 455.4C477.396 455.742 477.018 456.122 476.652 456.497C476.806 454.823 476.976 455.487 476.713 454.401L477.163 454.171L477.789 455.4ZM474.068 460.346C472.961 460.16 472.273 459.572 471.243 459.252C470.372 458.757 469.899 459.796 468.129 459.807C468.84 460.477 469.54 461.105 470.259 461.771C469.974 461.588 469.692 461.403 469.388 461.183L468.041 461.869C468.001 461.045 467.96 460.221 467.92 459.397C467.39 459.479 466.883 459.597 466.353 459.679C470.202 458.469 470.91 458.249 474.426 456.598C473.995 459.07 473.13 458.431 474.068 460.346ZM466.658 463.606C466.674 463.269 466.694 462.931 466.691 462.557L467.587 462.1L466.658 463.606ZM465.337 463.247L465.755 464.067L464.649 464.113C464.424 464.416 464.198 464.719 463.954 464.984C463.628 463.977 463.287 462.93 462.961 461.923L464.312 461.235L465.337 463.247ZM461.093 464.94L460.196 465.397C460.281 464.837 460.374 464.274 460.466 463.711C462.149 463.464 461.328 463.6 462.475 463.203C461.871 464.684 463.262 464.351 461.093 464.94ZM456.68 470.754C455.225 471.402 456.614 471.305 455.125 471.031C456.402 470.99 455.794 469.282 455.881 468.065C456.879 468.589 455.85 468.315 456.68 470.754ZM451.758 472.23L451.641 469.756C450.349 470.696 451.089 469.427 450.473 470.82L450.03 471.046C450.053 469.251 450.51 469.347 451.256 467.887C452.732 468.449 452.186 468.868 452.49 470.309C452.952 469.745 453.422 469.177 453.891 468.609C453.177 469.818 452.473 471.022 451.758 472.23ZM450.866 472.685L450.239 471.456L450.682 471.23C450.738 471.718 450.806 472.2 450.866 472.685ZM453.708 467.155L454.612 466.694C454.222 467.925 454.775 466.987 453.683 468.2C453.683 467.824 453.699 467.487 453.708 467.155ZM445.245 475.033C445.264 474.694 445.28 474.358 445.281 473.982L445.731 473.753C445.582 474.204 445.413 474.619 445.245 475.033ZM437.802 479.341C437.574 479.27 437.368 479.234 437.14 479.163C437.083 478.675 437.023 478.19 436.967 477.702C437.722 477.693 438.45 477.651 439.185 477.604C437.575 478.565 438.61 477.616 437.802 479.341ZM433.121 480.178C433.065 479.69 433.024 479.242 432.968 478.755C433.57 479.762 433.591 478.765 433.121 480.178ZM430.75 478.852C430.758 478.519 430.759 478.144 430.775 477.807L431.229 477.576C431.06 477.99 430.911 478.442 430.75 478.852ZM426.872 482.377L426.245 481.147L427.142 480.691C427.049 481.254 426.964 481.813 426.872 482.377ZM424.409 483.116C423.956 482.971 423.522 482.864 423.087 482.756C423.911 481.117 423.996 482.81 423.819 480.835C424.245 481.322 424.663 481.766 425.096 482.249C424.852 482.514 424.634 482.813 424.409 483.116ZM420.628 483.493C421.211 483.525 421.817 483.591 422.4 483.623C420.787 483.787 421.86 483.898 420.628 483.493ZM419.399 486.653L418.792 485.461C419.226 485.568 419.66 485.676 420.113 485.82L419.399 486.653ZM414.902 488.945C415.155 487.971 415.416 486.993 415.677 486.016C416.263 486.421 416.823 486.793 417.409 487.198C416.569 487.767 415.741 488.376 414.902 488.945ZM416.364 491.813L415.737 490.584L416.184 490.357C416.24 490.844 416.296 491.332 416.364 491.813ZM413.487 491.731L415.287 490.813C414.49 492.393 415.192 491.988 413.487 491.731ZM411.59 489.131C412.069 489.168 412.555 489.202 413.033 489.24C411.908 489.203 412.959 489.841 411.59 489.131ZM407.745 491.606L407.118 490.377L408.922 489.458C408.682 491.128 409.182 490.17 407.745 491.606ZM405.824 495.635C406.085 494.657 406.346 493.68 406.6 492.706C407.259 492.511 407.938 492.353 408.597 492.157C407.677 493.33 406.745 494.462 405.824 495.635ZM407.091 497.007C405.712 496.49 406.754 496.991 406.033 496.045L406.483 495.815L407.091 497.007ZM403.639 494.684C403.602 494.233 403.541 493.748 403.485 493.26L403.935 493.031C403.846 493.592 403.75 494.158 403.639 494.684ZM403.779 497.193C402.087 498.102 402.956 497.472 401.745 498.746C401.516 498.674 401.292 498.601 401.082 498.567L400.456 497.338C401.836 496.259 401.148 496.985 402.919 496.599C402.5 496.155 402.067 495.672 401.649 495.228L402.944 495.554L403.779 497.193ZM399.491 499.894C397.278 499.708 397.018 499.042 395.38 497.39C396.923 496.933 397.321 496.73 398.318 495.377L398.772 495.146C399.784 497.821 399.102 498.497 399.491 499.894ZM396.545 501.911C396.485 501.426 396.429 500.938 396.369 500.453L396.823 500.222C396.842 501.713 397.084 500.698 396.545 501.911ZM393.126 498.539L394.022 498.082C394.456 498.189 394.891 498.296 395.344 498.441C395.175 498.855 395.007 499.269 394.838 499.684C394.038 498.684 394.644 499.22 393.126 498.539ZM393.006 501.65C393.247 501.011 393.492 500.37 393.733 499.731C394.171 500.212 394.585 500.658 395.022 501.139C393.53 501.289 394.134 501.216 393.006 501.65ZM393.516 505.989L393.307 505.579C393.628 505.087 393.945 504.597 394.24 504.071L394.69 503.842C395.847 504.66 394.65 504.941 393.516 505.989ZM390.543 502.389L389.646 502.846C389.079 502.478 388.494 502.072 387.927 501.704C389.209 500.91 389.506 501.134 389.763 499.736C390.346 499.768 390.933 499.797 391.534 499.866C390.195 501.393 390.55 500.555 390.543 502.389ZM390.935 504.253L391.378 504.028C391.739 504.36 392.078 504.656 392.439 504.989C391.175 504.741 392.123 505.196 390.935 504.253ZM389.743 506.363L391.089 505.677C390.408 506.962 391.218 506.315 389.743 506.363ZM387.605 504.402L388.951 503.716L389.578 504.945C389.115 505.509 388.646 506.077 388.176 506.645C387.843 504.327 388.557 505.747 387.605 504.402ZM384.603 501.849C384.98 501.844 385.331 501.807 385.708 501.802L387.484 501.93C387.504 503.421 387.745 502.406 387.187 503.582C386.275 501.701 386.553 502.732 384.603 501.849ZM385.56 505.96C384.077 505.496 384.459 505.723 384.084 504.178C385.602 504.812 384.59 504.765 385.56 505.96ZM394.545 495.751L394.988 495.526L395.614 496.755L394.267 497.441C394.36 496.878 394.452 496.314 394.545 495.751ZM399.013 494.507C399.787 495.004 399.509 494.395 399.431 495.326L399.013 494.507ZM392.949 509.327C393.386 509.808 393.801 510.254 394.238 510.735C392.709 510.107 393.929 510.799 392.949 509.327ZM389.316 512.211L388.69 510.982C389.143 511.126 389.577 511.233 390.004 511.344C389.786 511.643 389.541 511.908 389.316 512.211ZM381.023 509.304C380.484 509.719 379.958 510.175 379.431 510.631C379.576 508.681 379.713 506.734 379.857 504.783L382.108 503.637C381.746 505.51 381.373 507.389 381.023 509.304ZM382.984 509.806C382.569 509.361 382.132 508.88 381.718 508.434C381.999 508.619 382.285 508.802 382.585 509.024C382.602 508.312 382.637 507.637 382.646 506.928C383.289 507.445 383.933 507.962 384.575 508.479C383.606 509.63 383.991 509.153 382.984 509.806ZM377.125 507.208C377.118 506.836 377.134 506.5 377.153 506.161L378.475 506.52L377.125 507.208ZM377.663 510.5C377.137 510.58 376.626 510.7 376.108 510.776C376.361 509.802 376.622 508.825 376.883 507.847C378.149 508.281 377.314 508.425 377.663 510.5ZM377.55 513.607L376.734 512.005L377.631 511.549L377.55 513.607ZM375.525 508.539L376.429 508.078L375.237 510.188C375.329 509.624 375.421 509.061 375.525 508.539ZM373.821 512.973C373.517 512.753 373.235 512.568 372.95 512.385C374.03 511.6 373.385 512.632 374.099 511.284L374.995 510.827C375.353 511.161 375.714 511.493 376.072 511.827L373.821 512.973ZM375.984 513.889C375.928 513.402 375.868 512.916 375.83 512.466L376.281 512.237C376.3 513.728 376.542 512.713 375.984 513.889ZM372.078 511.797C371.569 509.757 372.846 510.608 373.308 508.637L373.761 508.405C373.298 510.143 374.527 508.813 373.018 510.286L373.436 511.105L372.078 511.797ZM375.385 506.029L375.839 505.798C375.671 506.212 375.521 506.664 375.353 507.078C375.369 506.742 375.369 506.366 375.385 506.029ZM366.678 514.549L366.469 514.139C366.865 513.796 367.244 513.416 367.61 513.041L369.177 512.759C368.427 514.267 368.825 513.173 366.678 514.549ZM366.714 513.498C366.432 513.313 366.147 513.13 365.861 512.947C366.938 513.055 366.334 513.222 366.714 513.498ZM364.273 514.272L363.647 513.043L364.097 512.813C364.157 513.299 364.213 513.786 364.273 514.272ZM363.611 514.094C362.857 514.103 362.129 514.145 361.393 514.191C361.466 513.966 361.561 513.777 361.634 513.552L362.985 512.864L363.611 514.094ZM364.121 518.432L363.703 517.613C364.477 518.11 364.199 517.501 364.121 518.432ZM360.373 517.761C360.767 517.044 361.153 516.331 361.566 515.652L362.47 515.191C361.755 516.024 361.068 516.891 360.373 517.761ZM362.321 519.35C362.02 519.127 361.734 518.944 361.453 518.759C362.526 518.87 361.922 519.037 362.321 519.35ZM357.913 518.498C358.115 516.659 358.564 516.29 359.384 514.699L360.28 514.242C360.125 516.292 359.694 516.558 358.609 517.628C358.909 517.85 359.195 518.033 359.469 518.222C358.969 518.336 358.439 518.418 357.913 518.498ZM356.948 521.054C357.041 520.491 357.133 519.928 357.226 519.365C358.831 519.204 357.765 519.09 358.99 519.498C357.298 520.407 358.156 519.782 356.948 521.054ZM357.765 522.656C357.705 522.171 357.667 521.72 357.607 521.235L358.061 521.004C358.081 522.495 358.323 521.48 357.765 522.656ZM359.712 524.245C358.935 524.171 359.464 523.62 358.146 524.527L358.423 522.837C358.652 522.908 358.858 522.944 359.086 523.015C360.345 522.608 359.134 522.521 360.641 522.739C360.324 523.229 360.003 523.721 359.712 524.245ZM355.807 522.152L354.972 520.513C353.495 520.75 355.007 521.621 353.618 521.203C352.647 523.105 352.945 521.593 353.765 523.709C353.368 524.052 352.994 524.43 352.597 524.773C351.371 522.77 352.875 523.552 350.676 523.218C349.924 523.132 349.657 522.846 349.531 524.318L349.085 524.545C348.33 521.786 349.265 522.013 349.478 519.746L350.825 519.06C350.798 520.809 350.755 519.236 352.059 521.481C352.978 520.121 353.367 520.674 353.288 518.321C354.965 518.358 354.749 518.421 355.956 517.994C356.241 518.177 356.523 518.362 356.808 518.545C356.252 519.908 356.211 519.553 356.494 521.286C356.25 521.551 356.025 521.853 355.807 522.152ZM348.807 526.235C348.354 526.091 347.92 525.983 347.493 525.872L349.293 524.955C349.125 525.369 348.956 525.784 348.807 526.235ZM348.24 529.574C347.806 529.467 347.353 529.322 346.919 529.215C348.306 528.461 347.763 529.16 348.309 527.474C349.457 528.531 348.883 528.167 348.24 529.574ZM343.563 530.409C344.049 529.504 344.512 528.564 344.998 527.66L345.894 527.203C345.115 528.257 344.343 529.354 343.563 530.409ZM341.458 527.399L342.816 526.707C342.346 527.275 341.896 527.88 341.426 528.448C341.442 528.111 341.442 527.735 341.458 527.399ZM338.6 527.353C340.243 526.798 339.831 527.102 340.642 525.797L341.546 525.336C341.209 526.165 340.891 527.031 340.562 527.855L338.6 527.353ZM332.936 530.709C333.349 529.654 333.751 528.604 334.165 527.548C334.297 528.185 334.414 528.783 334.546 529.419C336.062 527.943 337.596 526.504 339.119 525.024L339.328 525.434L338.424 525.895C340.113 526.817 333.584 530.097 332.936 530.709ZM335.362 531.021L334.944 530.201C335.737 530.736 335.444 530.087 335.362 531.021ZM334.137 534.179C334.338 532.716 334.295 533.911 333.979 532.758L334.433 532.526C334.552 533.827 335.107 532.699 334.137 534.179ZM331.91 528.697C332.09 529.638 332.674 528.918 331.633 530.387C331.726 529.824 331.818 529.26 331.91 528.697ZM330.894 532.265C330.91 531.928 330.93 531.59 330.945 531.254L331.842 530.797L330.894 532.265ZM341.165 523.466L342.511 522.78C342.27 523.419 342.025 524.06 341.791 524.695C341.505 524.512 341.205 524.29 340.92 524.107C340.996 523.88 341.088 523.693 341.165 523.466ZM345.095 524.513C346.721 524.154 347.182 523.966 348.426 524.365C346.85 525.355 345.252 526.311 343.676 527.301L343.467 526.891C345.056 525.659 344.197 526.144 345.095 524.513ZM344.279 522.911L345.633 522.222L346.051 523.041C344.249 523.818 345.675 523.655 344.034 523.552C344.111 523.326 344.202 523.138 344.279 522.911ZM349.025 519.977C347.736 520.915 348.926 520.684 347.462 520.257C347.988 520.177 348.499 520.057 349.025 519.977ZM357.166 514.797C358.673 514.498 356.459 516.471 355.992 516.943C356.379 516.23 356.772 515.513 357.166 514.797ZM341.128 536.764L340.501 535.535L340.951 535.305C341.011 535.791 341.068 536.278 341.128 536.764ZM327.952 534.28C327.293 534.1 326.631 533.921 325.987 533.78C327.122 532.826 327.044 533.711 327.165 531.631C327.808 532.149 328.447 532.667 329.093 533.182C327.635 533.832 328.264 533.183 327.952 534.28ZM322.84 535.383L322.632 534.974C323.082 534.369 323.544 533.805 324.014 533.237C324.3 533.42 324.581 533.605 324.886 533.825C324.188 534.322 323.508 534.855 322.84 535.383ZM318.336 537.679L317.709 536.449L319.031 536.808C318.787 537.074 318.561 537.376 318.336 537.679ZM312.481 540.662C312.799 539.796 313.128 538.971 313.446 538.105C313.558 538.987 313.664 539.121 312.481 540.662ZM301.861 546.542L301.045 544.94L301.949 544.479C301.914 545.155 301.897 545.867 301.861 546.542ZM300.688 548.688L299.132 548.965C299.141 548.632 299.16 548.294 299.157 547.92C301.006 547.963 301.784 547.52 302.974 546.491C303.163 548.6 302.176 547.508 300.688 548.688ZM297.621 548.233L296.878 550.113C296.804 547.852 297.355 548.557 297.898 546.543C298.078 547.484 298.651 546.77 297.621 548.233ZM294.949 548.562C295.367 549.006 295.801 549.489 296.219 549.933C294.699 549.441 295.517 550.009 294.949 548.562ZM295.495 551.85L295.078 551.031C295.863 551.569 295.57 550.921 295.495 551.85ZM291.802 550.166C291.818 549.829 291.811 549.457 291.827 549.12C291.858 549.668 292.366 549.221 291.802 550.166ZM287.957 552.641L287.33 551.412L289.131 550.494C289.718 551.509 289.322 551.007 290.412 551.906C289.589 552.138 288.761 552.372 287.957 552.641ZM289.669 553.786C289.689 553.448 289.705 553.111 289.706 552.736L290.602 552.279C290.307 552.804 289.99 553.294 289.669 553.786ZM286.94 556.209L286.033 556.672C286.052 556.333 286.053 555.958 286.069 555.621C286.354 555.804 286.655 556.026 286.94 556.209ZM284.956 555.672C283.666 555.531 284.747 555.731 282.911 557.23C283.003 555.682 282.921 555.301 283.722 553.25L284.956 555.672ZM284.686 557.358L284.268 556.538C285.061 557.073 284.761 556.428 284.686 557.358ZM276.485 557.97C275.959 558.051 275.448 558.17 274.93 558.247C274.945 557.91 274.939 557.538 274.955 557.202L275.858 556.741L276.485 557.97ZM271.831 564.424L271.414 563.604C272.187 564.102 271.917 563.489 271.831 564.424ZM252.378 570.77C252.379 570.394 252.395 570.057 252.407 569.722L252.857 569.493C252.689 569.907 252.528 570.318 252.378 570.77ZM240.28 574.869C240.213 576.264 239.869 574.375 239.673 573.677C240.167 574.27 240.661 574.863 241.151 575.458C240.87 575.273 240.565 575.052 240.28 574.869ZM238.411 577.886C237.969 577.736 237.535 577.629 237.097 577.523C237.269 577.107 237.418 576.656 237.576 576.247C237.828 576.447 238.219 576.388 237.784 576.657C238.146 576.989 238.503 577.323 238.865 577.655L238.411 577.886ZM237.723 578.753C239.332 578.59 238.243 578.44 239.472 578.847L237.723 578.753ZM236.775 580.221C236.784 579.888 236.803 579.55 236.819 579.213C236.85 579.761 237.362 579.312 236.775 580.221ZM233.368 576.889L235.541 577.799C234.064 577.567 234.684 577.955 233.368 576.889ZM235.663 580.272C235.381 580.087 235.096 579.904 234.81 579.721C235.887 579.829 235.283 579.996 235.663 580.272ZM234.942 582.187C234.958 581.851 234.967 581.518 234.967 581.142L235.418 580.913C235.268 581.364 235.1 581.779 234.942 582.187ZM232.106 581.099C232.107 580.723 232.123 580.386 232.142 580.048C232.424 580.233 232.709 580.416 233.01 580.638L232.106 581.099ZM220.918 596.981L220.501 596.162C221.294 596.697 220.997 596.05 220.918 596.981ZM228.992 581.653L228.365 580.424C229.692 580.968 229.07 580.253 228.992 581.653ZM215.687 588.948C215.707 588.61 215.703 588.236 215.723 587.897C216.157 588.005 216.61 588.149 217.045 588.257L215.687 588.948ZM214.304 590.685C214.397 590.122 214.489 589.559 214.582 588.995L215.028 588.768C214.791 589.405 214.549 590.044 214.304 590.685ZM213.565 592.563C213.505 592.078 213.449 591.59 213.408 591.142C213.617 591.176 213.835 591.253 214.044 591.287C213.902 591.735 213.734 592.149 213.565 592.563ZM207.32 600.344C206.151 600.33 205.129 600.475 206.24 599.346C204.274 598.705 205.237 600.045 203.623 598.661C206.35 597.741 205.475 599.454 208.095 597.415C208.377 597.6 208.663 597.783 208.944 597.968C207.774 599.69 207.4 599.13 207.32 600.344ZM213.231 601.931C213.348 602.528 213.48 603.164 213.597 603.762C212.087 603.17 213.288 603.826 212.327 602.391C211.204 603.48 210.754 603.24 209.389 604.405C209.715 603.206 210.053 602.002 210.406 600.837C211.343 601.204 212.287 601.567 213.231 601.931ZM201.731 596.059L200.172 596.338C200.34 595.923 200.482 595.476 200.651 595.061C201.18 594.979 201.687 594.861 202.217 594.779C202.049 595.193 201.899 595.645 201.731 596.059ZM201.282 601.872C203.174 601.659 202.95 601.726 204.371 602.363C203.342 602.183 202.321 602.046 201.282 601.872ZM204.291 604.422C202.125 604.446 203.335 604.486 201.908 603.102C204.387 602.965 202.039 604.02 204.101 604.049L204.291 604.422ZM198.094 598.945L197.468 597.716L198.814 597.029L199.44 598.259L198.094 598.945ZM197.772 601.643C197.636 601.008 197.512 600.414 197.38 599.778L197.834 599.547C197.813 600.261 197.778 600.936 197.772 601.643ZM196.564 598.176C197.448 598.992 196.902 598.426 196.747 599.631C196.687 599.145 196.62 598.664 196.564 598.176ZM200.348 597.796L202.057 598.943L201.373 599.808L200.348 597.796ZM204.589 596.105L203.451 597.201L202.844 596.009L203.74 595.552C204.022 595.737 204.307 595.92 204.589 596.105ZM195.181 599.913C194.937 600.178 194.719 600.477 194.493 600.779C193.171 598.966 193.905 598.686 191.938 597.999L194.137 597.864L195.181 599.913ZM183.842 595.461C184.32 595.499 184.806 595.533 185.285 595.571C184.16 595.534 185.211 596.171 183.842 595.461ZM58.6185 402.028L58.011 400.836L58.915 400.375L58.6185 402.028ZM56.4195 402.163L56.8182 402.945L56.3681 403.175C56.3278 402.351 56.2872 401.526 56.2468 400.702C57.1239 401.522 56.5814 400.954 56.4195 402.163ZM52.9075 407.519L52.9762 405.419L53.4262 405.19C53.5697 406.29 53.7196 405.885 52.9075 407.519ZM50.6896 407.616C50.9149 407.314 51.1592 407.048 51.3846 406.746L52.2809 406.289L52.0111 407.976C51.558 407.831 51.1237 407.724 50.6896 407.616ZM50.1193 410.957L49.9104 410.547C49.93 410.209 49.9498 409.87 49.9657 409.534L51.766 408.616C51.3954 409.884 51.324 409.827 50.1193 410.957ZM50.2956 412.416C48.8012 414.209 48.0604 414.071 49.0339 416.625C48.7596 416.436 48.4554 416.216 48.1738 416.031C47.7959 416.411 47.399 416.754 47.0249 417.132C48.2286 418.161 48.2193 417.932 49.4076 418.452L47.816 419.779C46.3869 418.584 46.9384 419.335 46.5823 417.358C46.2013 417.364 45.8469 417.404 45.466 417.411L46.0923 418.64C44.9037 418.542 43.7415 418.477 42.5529 418.378L43.1792 419.608C43.5564 419.603 43.9146 419.562 44.2919 419.557C43.7462 419.976 43.2195 420.432 42.7003 420.884C41.4952 420.137 42.331 419.571 41.9454 417.186C40.6714 417.601 41.3902 417.798 39.7275 417.284C40.9525 416.801 40.6994 416.93 42.3991 416.955C42.4916 416.392 42.5842 415.829 42.6767 415.265C43.3282 415.45 43.9907 415.628 44.6496 415.808C44.2858 415.618 47.0702 412.182 47.2615 410.912L49.4603 410.776L50.2956 412.416ZM117.614 562.339C117.614 562.714 117.598 563.051 117.578 563.39L116.762 561.788L118.112 561.1C118.394 561.285 118.679 561.468 118.961 561.653L117.614 562.339ZM42.4592 421.523C44.064 421.363 42.9795 421.211 44.2043 421.619C43.6213 421.588 43.0421 421.555 42.4592 421.523ZM113.468 560.885C113.652 560.135 113.814 559.348 113.998 558.598C114.942 558.961 115.886 559.324 116.823 559.692C114.931 559.858 115.015 560.097 113.468 560.885ZM110.763 562.263C110.478 562.08 110.196 561.895 109.892 561.675C109.988 561.485 110.06 561.261 110.156 561.071L111.51 560.381C111.937 560.492 112.371 560.6 112.805 560.707C112.13 561.239 111.458 561.769 110.763 562.263ZM107.581 552.67C107.264 553.16 106.943 553.652 106.644 554.179C106.641 553.806 106.661 553.467 106.677 553.13L107.581 552.67ZM39.0922 422.723L38.4658 421.493C38.6943 421.565 38.9 421.6 39.1284 421.672C39.1088 422.01 39.0928 422.347 39.0922 422.723C39.3941 422.193 39.7115 421.703 40.0324 421.211C39.8443 421.964 39.679 422.752 39.4909 423.505L39.0922 422.723ZM41.5552 421.984C42.0463 422.203 42.5563 422.459 43.0664 422.715C42.841 423.018 42.5967 423.283 42.3714 423.586L41.5552 421.984ZM42.9469 413.579L43.3969 413.35C43.1557 413.989 42.9106 414.63 42.6767 415.265C42.7618 414.706 42.8544 414.143 42.9469 413.579ZM102.739 552.087C100.956 550.509 102.489 552.12 102.149 549.807L103.47 550.166C103.225 550.807 102.984 551.446 102.739 552.087ZM102.695 553.095C103.422 553.428 104.142 553.718 104.877 554.048C103.445 553.886 103.891 554.034 102.695 553.095ZM105.833 558.159L107.191 557.468C106.105 558.49 107.29 558.215 105.833 558.159ZM98.661 548.534C98.227 548.427 97.774 548.282 97.347 548.171C97.584 547.91 97.809 547.607 98.035 547.305L98.488 547.073C98.545 547.561 98.605 548.046 98.661 548.534ZM100.489 553.233C99.588 552.707 98.006 552.95 96.471 554.249C96.563 553.686 96.655 553.122 96.748 552.559C98.154 552.358 99.568 552.154 100.975 551.954L100.489 553.233ZM95.812 541.821C95.828 541.484 95.829 541.109 95.844 540.772L96.298 540.541C96.13 540.955 95.98 541.407 95.812 541.821ZM39.223 461.931C38.8451 462.312 38.452 462.653 38.0815 463.029C37.4582 462.173 36.8123 461.283 36.189 460.427L38.8932 459.049C39.0095 460.022 39.1067 460.958 39.223 461.931ZM780.008 207.987C779.809 203.677 785.939 202.431 787.446 198.097C787.225 198.022 787.034 190.235 787.334 188.957C782.296 186.831 779.2 179.54 768.747 176.983C767.677 177.294 768.301 176.835 768.059 177.85C763.295 175.772 756.098 169.491 756.74 166.771L756.133 165.579C747.602 163.31 731.519 153.345 727.998 142.657C727.738 143.258 727.5 143.896 727.259 144.535C727.499 141.832 723.098 137.646 720.678 137.19C719.189 136.54 720.104 136.965 718.668 137.697C719.352 136.316 718.729 137.385 719.81 136.599C716.088 133.709 709.784 128.335 707.237 129.726C707.272 129.051 707.278 128.344 707.313 127.669C704.937 127.613 706.613 127.041 704.854 128.406C705.007 124.34 700.143 125.551 700.41 123.022C698.072 122.196 698.932 122.273 697.288 123.58C696.841 121.838 697.462 121.099 695.194 120.565C694.997 120.712 695.095 120.287 692.731 121.304C693.118 120.591 693.511 119.874 693.905 119.157C691.269 117.919 692.095 119.328 688.247 116.972C689.832 116.258 689.145 117.125 689.846 115.641C685.859 117.204 680.242 108.194 675.224 110.328C674.832 106.68 676.202 89.7002 666.699 89.146C666.699 89.146 666.691 89.1498 666.454 89.7869C660.415 85.7785 642.342 75.091 636.405 77.5532C636.49 76.9937 636.582 76.4305 636.675 75.8672C634.149 77.1073 633.868 76.5933 632.737 74.8235C631.707 75.8177 631.596 75.0762 630.249 76.6072C630.39 73.2976 609.459 71.1991 605.962 75.7023L605.127 74.0634C602.905 75.3837 602.901 75.8078 601.318 75.4879C600.137 77.1692 600.533 75.888 601.7 77.3584C600.305 77.2242 598.914 77.0882 597.501 76.9167C597.524 78.313 597.516 77.7538 597.89 78.783C589.681 76.6308 574.01 71.3835 563.43 77.9475C563.43 77.9475 561.847 76.6423 562.577 77.3961C559.571 81.0398 540.982 83.0037 535.916 87.415C535.615 87.1928 535.329 87.0097 535.048 86.8247L536.848 85.9073C533.607 86.0571 521.776 93.0712 521.776 93.0712C521.024 92.5157 521.127 93.1673 521.358 92.2516C519.827 91.8585 514.308 94.7646 514.607 95.6915C513.59 95.5528 512.55 95.3788 511.54 95.2363C511.357 95.7049 511.186 96.1677 510.984 96.5991C511.064 96.7929 511.047 96.9891 510.79 97.1199C510.859 96.9437 510.922 96.7715 510.984 96.5991C510.823 96.1647 509.904 95.6945 509.74 96.1536C506.389 97.908 500.452 99.5721 497.13 102.578C491.186 107.859 448.968 127.071 445.194 126.46C440.503 128.334 436.369 132.599 434.18 131.556C433.145 133.444 433.586 132.093 434.111 133.656C431.397 133.443 422.793 137.217 423.129 137.703L423.338 138.113C421.252 138.847 419.17 139.579 417.065 140.276L417.274 140.686C417.88 140.753 418.455 140.788 419.042 140.817C416.976 141.213 414.891 141.572 412.806 141.93C411.488 142.977 410.937 144.947 410.937 144.947C406.388 146.373 378.212 159.463 378.124 159.602C376.672 162.5 365.786 168.188 360.531 169.598C360.225 169.707 343.376 177.541 342.448 180.877C339.836 179.392 331.162 187.096 328.492 187.988C317.774 191.524 298.822 208.83 282.682 213.863C276.52 215.782 264.637 227.092 260.786 226.568C250.55 232.815 240.292 239.027 230.049 245.279C230.579 245.197 231.079 245.083 231.605 245.002C215.127 251.146 195.605 271.041 179.389 277.238C173.98 283.091 151.757 300.093 148.716 300.516C148.697 300.854 148.677 301.193 148.661 301.529C149.114 301.674 149.548 301.781 149.975 301.892C149.399 301.857 148.813 301.827 148.207 301.761C146.375 302.929 146.546 303.733 145.409 306.283C145.047 305.342 145.626 305.844 144.538 305.695C139.279 302.978 122.419 330.901 115.933 333.033C115.933 333.033 109.636 338.541 105.868 342.244C103.515 344.522 90.596 355.187 89.63 357.134C85.751 365.07 75.043 369.775 71.406 378.15C69.381 379.37 67.355 380.59 65.31 381.773C62.252 388.258 63.1527 391.083 54.6204 396.416L56.8135 397.364C55.2477 397.27 53.7082 397.21 52.1614 397.153C51.0666 398.931 51.6597 399.286 49.846 400.398C49.4058 401.373 49.4476 400.554 48.9783 399.807C46.0507 403.551 44.1475 404.662 43.1473 408.409C41.7867 407.836 42.8683 407.66 40.9655 407.456C40.5483 409.874 39.6768 410.178 37.3287 410.342C35.6329 414.444 33.9445 418.542 32.2487 422.643C34.5042 423.934 34.5772 422.818 36.8493 423.865L35.0416 424.786C35.022 425.125 35.0135 425.458 34.9939 425.796C35.3413 425.807 35.6851 425.819 36.0135 425.793L36.5528 425.518C36.5573 425.61 36.5729 425.695 36.5774 425.787C37.7541 425.797 38.9156 425.769 40.0922 425.78L39.6059 427.059L38.9796 425.83C38.6024 425.834 38.2441 425.876 37.8744 425.877C37.6107 427.888 37.726 426.469 38.8992 427.889C33.6585 430.137 20.6945 446.174 20.0684 447.713C20.628 448.085 21.214 448.49 21.781 448.858C20.5434 455.542 16.183 457.201 15.0483 464.583L16.8485 463.666C16.1461 465.009 16.7802 463.982 15.6881 464.726C19.3898 468.846 22.9757 481.613 25.8854 482.523C25.2124 483.805 26.0213 483.158 24.5388 483.209C26.179 492.838 41.0061 520.429 44.1103 522.742C52.3026 528.797 61.4527 534.599 67.203 538.004C70.653 534.697 78.946 536.149 78.675 532.675C81.829 532.475 84.672 536.564 86.446 537.912C85.863 537.881 85.276 537.851 84.674 537.783L85.092 538.602C84.931 539.013 84.781 539.464 84.613 539.879C86.447 539.929 85.452 539.216 87.526 538.91C87.515 538.54 87.535 538.202 87.551 537.865C87.668 538.463 87.8 539.099 87.924 539.693C88.198 541.195 86.964 542.34 85.636 543.909C87.244 543.277 92.372 541.368 94.333 540.04L94.732 540.823C94.273 542.277 94.486 540.901 94.908 542.281C92.576 543.001 92.936 543.192 92.237 542.61L90.89 543.296L91.099 543.706C89.671 544.95 89.708 545.354 90.287 547.686C92.452 544.753 96.048 545.033 98.81 544.376C96.671 547.765 92.182 546.439 91.071 550.337L90.174 550.794C92.009 550.844 90.502 551.143 91.975 549.876C91.974 550.252 91.958 550.589 91.939 550.927C93.994 551.053 91.92 550.045 94.401 550.188C94.184 551.003 93.617 550.588 94.973 552.431L94.53 552.657C93.509 552.52 92.473 552.344 91.46 552.203L92.902 555.035C93.979 553.829 93.461 554.797 93.835 553.527C94.98 553.835 100.301 555.863 102.092 557.485C101.417 558.016 100.738 558.55 100.051 559.041L100.259 559.45C102.322 558.681 102.306 558.549 103.443 556.797L104.278 558.435C103.864 559.491 103.462 560.541 103.048 561.596L104.64 560.268C105.109 563.22 107.816 561.794 108.963 563.181C110 563.497 109.129 563.331 108.275 564.047L109.111 565.686C109.385 565.875 109.67 566.058 109.952 566.243C111.362 565.102 110.895 565.997 110.911 564.769C112.19 565.478 112.18 565.061 111.065 566.192C111.201 566.827 111.314 567.426 111.45 568.061C114.491 565.009 113.031 565.05 114.753 562.295C115.187 562.403 115.614 562.514 116.048 562.621C115.079 563.772 115.463 563.294 114.456 563.948C114.44 564.66 114.404 565.335 114.395 566.044C116.099 563.815 115.491 565.345 117.963 565.258C118.427 563.52 118.59 563.766 118.266 562.523C119.981 562.634 119.126 562.601 120.729 561.784C121.306 566.605 130.393 571.031 134.334 570.665C134.169 571.454 133.981 572.206 133.815 572.995C136.113 573.466 136.864 574.491 138.091 576.916C138.553 576.352 139.023 575.784 139.492 575.216C140.383 578.141 145.299 577.795 148.836 579.09C149.157 578.598 149.474 578.108 149.787 577.619C150.793 579.594 152.83 578.791 155.618 581.265L156.969 580.577C156.591 580.581 156.233 580.623 155.863 580.624C155.948 580.064 156.041 579.501 156.152 578.975C161.985 588.344 178.663 591.531 182.094 600.95C183.581 600.521 185.083 600.131 186.57 599.702C186.838 600.597 187.084 601.457 187.353 602.353C188.16 600.018 187.28 600.701 189.025 598.967L188.19 597.328C186.557 597.221 187.55 597.701 187.92 599.014L187.016 599.474C185.953 597.904 186.79 598.839 185.076 597.882C185.167 597.695 185.244 597.468 185.336 597.28L187.582 596.136C187.655 595.911 187.732 595.684 187.824 595.497L189.266 598.328C189.628 598.66 189.985 598.994 190.327 599.289C190.135 598.542 189.945 597.794 189.753 597.048L190.207 596.817C191.051 597.747 191.902 598.674 192.754 599.601C192.586 600.015 192.436 600.467 192.275 600.877C191.556 601.994 192.256 600.84 189.812 601.616C190.081 602.511 190.327 603.371 190.596 604.267L192.396 603.349L191.284 603.4C191.856 602.076 194.061 601.751 196.294 599.862C197.256 602.375 198.032 601.839 197.077 602.513C197.641 602.883 198.23 603.286 198.797 603.654L199.24 603.429C199.047 602.682 198.858 601.934 198.669 601.186L199.782 601.135C199.797 600.798 199.798 600.423 199.814 600.086C200.328 602.686 202.403 605.242 201.1 607.079C202.78 607.397 202.781 606.599 204.885 606.7C205.05 605.912 205.227 605.164 205.396 604.374C206.759 604.853 205.806 604.259 206.022 605.604L206.231 606.014C207.002 605.292 207.747 604.537 208.518 603.816C208.234 604.712 204.827 607.433 205.186 610.628C207.791 608.175 207.796 608.735 210.832 607.236L211.04 607.645C210.345 608.516 209.658 609.382 208.944 610.215C208.943 610.591 208.927 610.928 208.907 611.266L209.116 611.676L210.916 610.758C211.145 610.83 211.351 610.866 211.579 610.937C210.878 609.699 211.937 610.426 210.499 609.939C210.82 609.447 211.137 608.957 211.458 608.465C212.008 608.607 212.594 608.543 214.762 608.283C214.197 607.257 214.835 607.12 212.804 607.779L211.761 605.73C213.623 603.795 211.722 605.655 214.918 604.121C213.726 602.664 214.202 602.797 213.501 600.245C214.509 599.731 214.578 600.353 214.196 599.374C215.236 599.549 216.246 599.691 217.285 599.865C217.092 599.118 216.903 598.37 216.711 597.624L213.103 599.462C213.272 598.672 213.456 597.921 213.625 597.131L212.721 597.592C211.77 597.748 210.55 598.37 210.434 599.79L209.988 600.017C209.829 597.939 209.547 596.816 211.034 595.402C211.873 596.147 210.788 595.996 212.545 596.133C213.152 594.088 215.612 590.723 216.748 589.909C217.27 588.423 216.586 589.71 218.359 588.619C218.843 590.812 218.205 589.965 220.914 591.4C220.911 591.026 220.93 590.687 220.946 590.351C222.079 590.431 221.382 590.223 220.766 588.894C221.2 589.377 221.618 589.821 222.051 590.304C223.187 588.036 221.455 589.482 222.808 587.338C220.514 586.817 221.04 588.567 219.983 586.244C218.042 586.435 219.441 587.552 217.765 586.341C217.539 586.644 217.295 586.909 217.07 587.211C217.368 585.839 217.163 586.272 218.251 585.061C218.353 584.258 223.36 581.754 225.452 581.392C226.232 583.059 225.278 582.888 227.4 582.98C226.021 585.56 223.805 585.093 223.679 587.926C223.302 587.931 222.944 587.972 222.567 587.977C225.24 589.149 225.964 586.902 227.312 585.042C228.078 586.389 228.355 586.435 229.915 586.813C229.833 585.87 230.33 586.414 229.498 585.994L229.289 585.584L231.54 584.437C231.408 586.1 232.002 584.812 230.61 585.943C233.449 587.688 232.419 586.007 234.911 588.82C232.875 588.825 229.595 590.965 227.581 590.02C226.946 591.376 226.315 592.73 225.661 594.049C223.376 593.289 225.239 592.716 223.044 593.365C223.278 591.884 223.342 591.852 224.459 590.579C222.853 590.599 223.523 591.15 222.26 590.714C220.853 593.965 220.004 592.989 219.444 595.199C218.858 594.794 218.29 594.426 217.704 594.02C217.334 594.397 216.96 594.775 216.563 595.118L217.398 596.757C217.756 596.716 218.134 596.711 218.511 596.707L218.093 595.887C219.268 596.133 219.764 596.537 220.432 598.261L221.545 598.211L221.127 597.391C223.094 596.718 221.149 597.333 222.719 596.064C222.738 595.726 222.755 595.389 222.755 595.013L223.799 597.062C224.805 595.846 225.013 596.584 225.423 594.686C226.945 595.319 225.733 594.622 226.705 596.098C226.721 595.386 226.757 594.71 226.773 593.998C229.534 591.747 228.445 591.082 231.937 591.884C230.364 592.263 230.33 592.233 229.441 593.671C229.67 593.742 229.875 593.779 230.104 593.85C231.843 592.26 233.606 592.253 233.287 591.196C234.816 591.824 233.593 591.133 234.572 592.605C236.264 589.397 237.203 590.514 239.138 588.214C239.274 588.849 239.387 589.448 239.523 590.083C240.506 587.892 239.569 587.901 239.471 585.511C238.7 586.232 237.929 586.954 237.165 587.671C237.221 588.159 237.281 588.644 237.338 589.132C235.874 587.39 236.688 587.774 235.175 588.216C234.627 586.571 234.467 586.653 233.07 585.206C233.355 585.389 233.637 585.574 233.922 585.757C234.858 584.201 234.702 586.111 235.2 587.171C236.1 585.821 237.453 585.413 237.764 583.284C236.944 583.044 237.367 583.58 236.498 581.911C237.899 582.464 236.834 581.927 237.574 582.911C238.547 582.228 239.528 581.54 240.516 580.896C239.023 580.577 240.458 580.644 238.957 581.174C239.377 579.13 239.449 580.173 241.038 578.565C241.022 579.277 240.986 579.952 240.966 580.666C242.586 578.762 241.952 580.164 241.481 578.34C242.007 578.259 242.518 578.14 243.048 578.057C243.478 579.574 243.184 579.208 244.515 579.844C243.762 578.21 245.246 578.767 243.699 578.242L242.674 576.23C242.666 576.563 242.646 576.901 242.63 577.238L241.514 577.291C240.024 576.501 241.207 576.743 239.769 577.194C240.596 575.6 242.791 575.889 242.325 573.311C243.137 573.414 243.941 573.52 244.752 573.623C244.318 573.14 243.9 572.696 243.467 572.213L243.917 571.984C245.495 573.197 245.914 573.688 247.632 573.704C247.973 576.533 247.072 575.491 246.162 577.503C247.275 577.452 248.387 577.401 249.474 577.317C248.177 574.506 249.724 576.439 250.944 573.518C251.435 574.113 251.929 574.706 252.438 575.338C253.623 573.561 252.736 574.763 254.685 574.193C253.295 573.681 251.916 573.21 250.526 572.698L250.337 572.326C250.856 571.874 251.383 571.418 251.928 570.999L252.535 572.191C253.047 572.118 253.664 571.804 254.352 571.406C254.348 571.361 254.336 571.32 254.336 571.273L255.002 570.934C255.651 570.462 256.342 569.923 256.998 569.307C257.023 569.154 257.044 569.002 257.091 568.884C257.222 568.864 257.353 568.845 257.487 568.87C259.066 567.362 260.513 565.733 261.207 564.722C262.775 565.565 261.671 564.768 262.232 566.734C263.985 564.996 264.081 565.839 264.9 566.407L266.701 565.49C265.517 563.324 266.169 563.931 264.84 561.839C267.925 562.614 266.979 562.157 269.939 561.822C269.861 560.125 269.763 560.832 270.458 559.493C270.743 559.676 271.036 559.902 271.321 560.085L272.434 560.034C269.96 562.139 269.865 563.268 268.022 565.849C268.199 564.726 268.385 563.599 268.589 562.51C267.168 563.327 268.126 563.497 266.788 563.427C266.434 564.922 266.603 564.085 267.572 566.078C265.767 566.435 267.475 566.596 265.563 566.585C266.408 568.501 265.938 568.553 267.902 568.96C267.764 567.669 268.612 566.768 269.822 564.931L270.638 566.533C272.139 564.595 270.422 565.658 272.893 565.385C273.059 564.221 273.079 563.553 273.668 562.456C274.768 563.209 273.664 563.349 274.982 562.818C276.967 563.074 274.891 562.677 277.477 561.031C275.217 560.493 275.29 560.738 274.564 561.999C273.844 561.193 274.265 561.448 274.198 560.168C273.19 561.15 273.494 559.963 273.25 561.636L272.796 561.867C273.057 560.89 273.318 559.912 273.572 558.938C275.392 559.466 274.664 559.179 275.501 560.489C276.452 559.019 277.389 557.51 278.321 556.002L278.948 557.232C279.382 557.339 279.816 557.446 280.243 557.557C280.503 556.955 280.748 556.314 280.993 555.673C279.575 555.879 280.726 556.325 279.218 555.545L281.922 554.167C281.831 555.34 281.881 556.441 281.355 557.506C282.805 558.41 281.386 558.1 283.12 557.64C284.64 558.601 283.583 557.638 284.145 559.651C286.44 557.215 287.558 556.833 287.66 554.294L285.86 555.211C286.662 553.723 285.835 554.942 287.452 553.884C286.865 553.854 286.282 553.823 285.706 553.788L285.498 553.378C286.45 553.409 287.414 553.434 288.355 553.424C289.327 555.744 288.957 555.698 288.25 556.574L289.067 558.176L289.521 557.945C290.562 555.537 291.602 553.13 292.663 550.76C293.306 550.901 293.965 551.081 294.628 551.26C292.366 551.943 292.181 552.225 292.305 554.508L292.514 554.918C294.538 554.403 293.188 554.199 294.958 554.142C293.772 552.588 295.409 553.208 293.245 552.997L293.036 552.587C296.09 552.016 294.904 552.574 297.742 550.706C297.855 551.305 297.999 551.936 298.112 552.535C300.178 549.887 301.807 549.432 304.464 548.312C304.157 545.043 304.331 545.19 306.004 542.414C306.779 543.191 307.567 544.01 308.343 544.788C306.393 545.218 306.417 546.426 305.313 548.866L305.522 549.275C306.265 549.225 306.672 548.83 306.889 548.344C306.81 548.29 306.739 548.233 306.671 548.174L306.965 548.024C307.132 547.47 307.063 546.848 306.96 546.525C307.695 546.479 308.431 546.432 309.178 546.427C309.498 544.528 308.965 544.189 307.977 542.957C308.789 542.684 309.608 542.454 310.42 542.181C310.932 543.562 309.943 543.128 311.497 543.181C311.388 544.081 311.276 544.983 311.168 545.882C312.24 545.008 313.305 544.136 314.377 543.262L313.333 541.213C314.02 540.722 314.7 540.188 315.375 539.656C314.901 541.118 315.723 540.183 314.23 540.756C314.362 541.392 314.479 541.99 314.611 542.626C315.939 542.795 316.109 542.192 318.377 542.209C318.412 541.534 318.429 540.822 318.457 540.151C319.214 541.361 318.895 539.834 319.533 541.151C322.035 539.688 321.68 539.165 323.656 536.985C324.735 538.735 326.61 537.826 329.362 538.16C329.455 537.597 329.547 537.034 329.632 536.474C328.904 536.517 328.169 536.563 327.43 536.611L326.803 535.382C329.575 535.424 329.343 535.871 331.275 534.136C331.468 534.882 331.665 535.627 331.858 536.373C332.846 535.729 333.826 535.041 334.796 534.359C334.703 534.923 334.611 535.486 334.518 536.049C335.213 535.179 335.908 534.309 336.596 533.442C336.446 533.894 336.278 534.308 336.117 534.719L336.326 535.128C337.548 533.802 337.149 534.427 337.5 532.982L338.396 532.525L337.291 532.572C336.8 532.353 336.29 532.097 335.78 531.84C336.29 531.721 336.816 531.641 337.346 531.558L338.243 531.102C338.416 532.186 338.589 533.271 338.789 534.39C340.019 532.731 339.752 533.852 339.091 531.655C340.877 531.214 342.355 531.493 343.048 532.735C345.509 530.778 345.494 529.472 347.312 531.08C348.659 530.018 350.025 528.993 351.391 527.969C350.804 526.954 351.2 527.456 350.109 526.557C353.23 526.797 353.366 526.493 356.8 525.213C356.229 524.471 355.663 523.727 355.112 523.023C357.202 523.694 356.693 523.578 357.008 525.622C358.911 524.888 358.817 524.842 360.111 525.027C355.725 526.323 357.145 527.758 350.458 529.476C350.03 530.539 349.931 531.199 349.683 532.405C347.928 531.094 349.102 533.03 347.312 531.08C345.938 532.108 344.572 533.132 343.206 534.157C342.473 533.216 343.52 533.715 342.144 533.196C341.31 534.888 340.191 535.928 338.753 535.441C338.492 536.042 338.247 536.683 338.002 537.324C339.073 538.046 337.704 538.321 336.378 539.7C336.563 538.574 336.748 537.447 336.952 536.358C335.446 537.595 334.982 538.817 333.988 538.338L333.534 538.569C333.803 539.464 334.075 540.357 334.344 541.253C338.701 538.751 340.801 538.339 344.041 535.796C343.797 536.061 343.571 536.364 343.346 536.666C345.306 537.498 345.676 536.183 347.795 535.385C348.024 533.673 348.203 535.083 346.979 533.783C347.147 533.368 347.297 532.917 347.465 532.503C348.27 534.063 347.902 533.359 349.153 534.693C351.075 533.15 351.262 533.618 351.451 532.537C353.76 531.735 351.98 531.892 350.857 530.258C352.898 529.969 357.846 533.032 357.547 528.914C358.981 529.357 357.758 528.759 358.604 529.877C360.672 529.715 359.061 529.081 359.347 527.997L359.765 528.816C359.99 528.514 360.216 528.211 360.46 527.946C360.46 527.946 362.747 526.687 365.572 526.843C365.776 525.754 365.953 524.631 366.138 523.504L365.235 523.965C364.299 522.893 363.954 523.632 364.093 525.063C363.45 524.546 362.807 524.029 362.164 523.512C361.762 524.561 361.348 525.616 360.946 526.666C360.436 526.41 359.926 526.154 359.416 525.897C361.002 525.699 362.065 523.703 360.678 521.688C361.818 520.966 362.948 520.203 364.069 519.444C364.769 520.448 365.472 521.451 366.171 522.455L366.625 522.224C366.252 520.49 367.761 520.942 365.625 519.168C366.773 518.395 365.812 519.26 366.774 518.066C367.042 518.961 367.307 519.859 367.576 520.754C368.083 520.637 368.602 520.56 369.113 520.441C368.694 519.997 368.261 519.513 367.843 519.07C368.674 518.834 369.482 518.563 370.306 518.331C369.313 517.476 368.308 516.627 367.304 515.778C367.323 515.44 367.324 515.064 367.34 514.727C368.829 514.532 369.192 514.206 369.975 514.511C369.982 514.46 369.986 514.412 370.012 514.398C370.294 514.583 370.579 514.766 370.872 514.992C370.485 514.72 370.211 514.578 369.975 514.511C369.248 516.43 369.394 515.558 370.792 517.051C370.772 517.389 370.775 517.763 370.756 518.102C371.736 517.414 372.728 516.768 373.705 516.083C375.032 515.313 373.697 516.087 374.637 514.576C375.071 515.058 375.489 515.502 375.923 515.985C376.309 515.272 376.703 514.555 377.097 513.838C378.911 514.181 379.53 514.006 380.873 513.462C380.729 515.413 381.284 514.333 379.227 515.803L381.211 516.341C382.26 514.914 382.944 514.566 382.626 513.555C383.7 513.759 382.59 513.245 381.532 513.643L380.906 512.414C383.926 510.359 381.736 511.615 385.619 510.528C386.256 508.937 385.065 509.403 386.376 507.562C387.046 508.722 386.429 509.037 388.352 508.103C388.65 510.204 389.101 508.754 387.837 510.431C387.672 511.219 382.6 514.46 381.175 517.391C381.533 517.35 381.91 517.345 382.287 517.341C382.043 517.606 381.818 517.908 381.573 518.174C388.078 513.827 389.466 515.466 395.135 510.279C395.042 510.842 394.938 511.364 394.846 511.927C396.88 510.375 396.001 510.259 396.887 510.371C398.352 508.639 398.062 508.787 397.663 507.442L398.141 506.166C397.34 506.433 396.51 506.669 395.682 506.903C395.923 508 395.948 507.471 396.967 508.312C394.559 509.305 393.204 507.649 390.036 510.296L389.22 508.694C392.333 507.483 390.989 508.496 392.612 506.449C392.655 506.709 410.239 496.576 412.225 495.94C413.589 495.526 412.588 495.051 412.711 494.659C413.7 494.015 414.68 493.328 415.65 492.646C416.312 492.825 416.971 493.005 417.626 493.188C418.296 489.702 418.475 491.958 419.792 488.518C420.443 488.703 421.106 488.881 421.764 489.061C419.577 490.082 420.046 488.999 420.122 491.4C421.653 489.588 423.207 487.81 424.739 485.998C424.485 486.971 424.224 487.949 423.963 488.926C427.187 486.251 426.359 486.392 429.243 483.702L430.565 484.061C429.686 484.884 429.921 483.873 429.609 485.534L430.513 485.073C431.119 485.656 432.36 482.583 433.539 480.997C434.837 481.227 437.332 480.754 437.525 481.031C438.26 480.985 438.995 480.939 439.723 480.896C439.769 478.714 438.476 479.937 441.158 478.148C439.703 477.481 441.369 477.477 439.635 477.375L439.426 476.965C440.941 476.756 441.992 476.878 443.383 478.046L443.83 477.819L444.733 477.358C442.359 475.19 441.594 475.298 438.819 475.773C439.591 474.676 440.045 474.961 441.282 475.034L441.732 474.805C441.817 474.246 441.909 473.682 442.002 473.119L439.751 474.266C440.729 472.735 442.476 473.065 444.047 471.561C444.329 471.745 444.633 471.966 444.915 472.151C444.277 473.133 443.665 474.148 443.027 475.13C444.495 476.541 444.993 475.302 446.08 476.672C447.417 477.117 446.136 476.644 446.687 477.864C447.499 476.137 448.012 475.829 446.566 475.392C446.45 474.419 446.337 473.444 446.229 472.514L448.483 471.365L448.673 471.738C448.134 472.528 447.591 473.321 447.045 474.116C447.615 474.857 448.181 475.601 448.733 476.306L449.183 476.076C448.993 475.328 448.801 474.582 448.611 473.834C452.014 473.789 452.626 473.243 454.012 471.082C454.731 471.748 455.431 472.377 456.15 473.043C457.384 471.382 458.633 469.76 459.867 468.099C459.466 466.473 459.468 467.692 459.35 466.579C459.167 466.531 458.972 466.443 458.796 466.392C457.791 467.326 457.908 466.047 456.379 466.826C456.151 466.754 455.934 466.677 455.728 466.641L455.519 466.232C455.886 465.857 456.283 465.514 456.657 465.136C457.262 465.578 457.975 466.012 458.796 466.392C458.925 466.232 459.085 466.057 459.292 465.858C459.314 466.175 459.33 466.401 459.35 466.579C460.796 467.062 462.541 467.158 464.58 466.213C464.545 466.888 464.528 467.6 464.5 468.272C465.171 468.117 465.85 467.96 466.509 467.764C465.734 466.987 464.939 466.171 464.163 465.394C465.773 464.949 466.678 464.628 467.943 465.016L469.294 464.328C468.282 463.482 469.343 463.881 467.972 463.969L468.459 462.689C469.955 463.428 469.163 462.94 469.503 464.738C471.474 464.671 469.657 464.002 471.702 464.602C471.084 462.195 471.923 462.003 471.188 460.266C474.27 460.807 472.925 462.618 475.214 459.247C475.784 459.989 476.35 460.733 476.894 461.441C477.588 460.946 478.267 460.413 478.954 459.922C477.264 459.657 478.736 459.704 476.945 460.429L476.319 459.2C476.206 458.601 476.07 457.966 475.956 457.367L477.757 456.449C478.038 456.634 478.324 456.817 478.605 457.002C478.079 457.458 477.56 457.911 477.014 458.33C476.998 458.666 476.997 459.042 476.981 459.379C479.169 458.733 478.25 458.263 479.441 458.642C479.817 457.183 479.629 458.358 479.268 457.181C481.467 457.046 482.181 457.527 484.363 457.166C484.445 455.857 484.648 456.411 485.537 455.02L485.954 455.839C487.12 455.948 485.668 456.877 488.121 456.753C487.357 455.218 488.297 452.299 490.311 451.038C489.66 450.854 489.016 450.713 488.357 450.532C488.732 450.154 489.109 449.773 489.495 449.436L491.062 449.154C490.781 451.409 491.611 450.564 490.52 451.448C491.58 452.738 491.329 452.584 492.468 453.036C493.073 451.18 492.73 450.885 491.713 449.338L493.967 448.19C494.743 448.968 495.519 449.745 496.313 450.56C496.824 450.441 497.343 450.365 497.869 450.284C497.773 448.597 497.692 446.949 497.6 445.306C497.829 445.002 498.074 444.737 498.299 444.434C499.076 445.868 498.666 444.998 500.228 445.985C499.549 446.519 498.873 447.051 498.182 447.544C499.119 447.911 500.064 448.274 501.027 448.675C500.983 447.431 501.055 447.159 502.888 445.662C503.842 447.569 502.557 447.145 505.721 446.753C505.27 444.589 505.672 444.854 505.175 443.464C508.368 443.48 507.532 443.014 510.515 442.809L510.185 439.927C511.457 440.639 511.068 440.556 511.656 441.711C512.877 440.76 514.076 439.774 515.289 438.827C514.73 438.456 514.144 438.05 513.577 437.682C516.39 437.375 514.69 438.57 517.543 437.679C517.033 437.423 516.531 437.162 516.039 436.943C516.916 436.825 517.804 436.701 518.688 436.579C518.708 436.241 518.717 435.908 518.736 435.569C517.634 435.568 518.629 435.671 517.872 434.977C516.18 435.886 517.038 435.262 515.831 436.534C515.394 436.053 514.979 435.607 514.542 435.126C515.071 435.044 515.578 434.926 516.101 434.847C515.247 434.625 518.424 434.837 519.918 433.419C520.344 433.53 520.779 433.637 521.232 433.782C520.911 434.274 520.601 434.76 520.28 435.252C522.149 434.957 523.298 433.433 525.074 431.308C525.059 432.77 525.706 431.877 524.993 433.366L525.202 433.776C525.982 432.347 526.781 430.954 527.569 429.52C526.148 428.884 526.316 428.845 524.483 429.028L523.458 427.016C525.483 427.44 524.534 427.031 525.387 428.567C527.728 427.515 527.669 427.592 529.252 426.129C529.326 428.766 528.617 428.846 528.144 431.761C530.357 430.634 529.92 430.246 530.848 430.383C532.156 428.638 531.801 428.115 532.135 425.129C531.053 425.352 531.53 426.094 531.048 425.213C529.469 425.268 531.034 425.221 529.972 424.214C529.912 423.728 529.856 423.241 529.796 422.755C531.896 421.966 531.864 423.109 533.85 420.689C533.592 423.355 532.461 424.353 533.596 427.998C533.689 427.059 533.779 426.122 533.853 425.145L533.701 424.847C533.769 424.86 533.824 424.831 533.899 424.84C533.916 424.644 533.918 424.408 533.935 424.212C534.388 424.356 534.822 424.464 535.26 424.569C534.805 424.66 534.35 424.751 533.899 424.84C533.881 424.943 533.864 425.046 533.853 425.145L534.536 426.486C536.313 424.502 537.368 422.885 540.215 422.045C539.506 420.81 540.565 421.537 539.157 421.082C539.678 417.579 541.311 419 542.036 414.501L543.393 413.809C542.993 415.046 543.552 414.103 542.453 415.32C543.173 415.61 543.908 415.94 544.627 416.23C543.892 416.277 543.156 416.323 542.409 416.328C542.342 419.553 542.073 421.379 540.423 422.454C540.115 423.081 539.919 422.899 539.765 422.274C538.841 423.449 537.912 424.579 536.999 425.748C538.12 424.426 538.267 425.477 539.901 424.785C539.584 425.275 539.274 425.762 538.953 426.254L539.788 427.893C540.932 427.122 539.968 427.989 540.926 426.797C542.018 426.522 541.54 426.484 541.625 425.925C543.331 424.868 544.085 426.173 544.145 423.092L544.599 422.861L544.53 424.961C547.327 423.019 550.124 421.078 552.913 419.141C553.551 418.159 554.163 417.143 554.801 416.161C554.709 416.724 554.616 417.288 554.505 417.814C557.325 416.471 559.915 414.353 561.556 412.719C561.641 412.16 561.734 411.597 561.826 411.033C560.572 411.156 559.307 411.284 558.072 411.444C557.997 410.028 558.306 411.278 557.445 410.215L557.924 408.939C561.808 407.054 562.838 406.388 565.949 405.084C564.386 404.426 564.669 404.282 563.168 404.765C563.169 404.39 563.184 404.053 563.204 403.715C564.749 403.96 564.898 403.884 566.08 405.065C566.765 404.763 567.554 404.455 568.489 404.072C568.074 403.627 567.637 403.145 567.222 402.7C567.616 401.983 568.01 401.266 568.404 400.549C569.157 402.652 568.463 400.941 569.637 402.971C570.795 401.536 571.952 400.102 573.11 398.668C573.025 399.227 572.932 399.79 572.82 400.316C573.045 400.39 573.274 400.461 573.479 400.497C574.661 399.238 574.47 400.086 574.885 398.795C574.923 398.87 575.037 398.671 574.676 398.386L576.476 397.468C574.231 396.454 574.254 396.114 572.816 394.735L574.163 394.049C575.535 395.649 574.825 394.227 575.396 396.47C576.019 395.825 576.629 395.185 577.229 394.504C577.865 396.432 577.612 397.031 579.334 397.514C578.776 396.813 578.794 395.396 579.238 393.996L579.865 395.226C581.85 394.59 580.537 395.681 581.46 393.897C581.649 394.645 581.838 395.393 582.038 396.136C584.021 393.812 584.7 392.715 583.988 391.06C586.188 391.066 584.54 390.591 585.719 392.243C587.345 391.039 585.596 391.743 587.52 391.326C587.564 389.004 586.863 389.549 588.73 388.128C587.163 387.472 588.288 387.602 586.981 388.034C587.226 387.393 587.467 386.754 587.705 386.116C589.384 387.748 588.607 388.613 590.886 390.126C588.58 393.6 580.58 398.193 577.743 398.841C578.104 399.173 578.461 399.507 578.812 399.845C576.981 401.622 574.954 401.248 572.993 401.777C574.519 402.924 573.231 403.392 575.368 403.101C576.231 402.661 576.127 403.137 575.874 401.858C577.767 401.316 579.031 401.094 581.648 400.933C580.694 399.402 581.641 400.468 580.378 399.563C583.05 398.811 582.276 399.581 585.728 397.822C585.309 397.379 584.883 396.892 584.465 396.448C586.238 396.342 585.893 396.518 587.137 396.119C587.428 395.595 587.748 395.103 588.066 394.613C587.784 394.428 587.48 394.208 587.198 394.023C588.927 394.456 587.972 394.192 588.692 395.843C591.692 392.765 592.805 390.462 597.075 390.023L597.345 388.337C598.548 387.067 596.609 387.398 595.423 386.782C596.193 385.405 595.635 386.158 597.015 385.455C595.54 384.189 596.567 384.51 595.035 384.916C595.596 384.16 596.142 383.366 596.678 382.577C597.741 383.818 597.75 383.109 598.156 384.357C601.566 382.01 599.099 381.39 602.693 381.013C602.308 379.098 602.647 379.019 601.488 377.545C601.733 377.28 601.958 376.977 602.202 376.712C603.35 377.769 602.701 377.865 604.131 378.263C605.638 378.949 606.366 377.453 607.696 377.479C608.716 375.692 608.45 376.109 608.002 374.742C610.035 374.832 608.085 375.732 610.879 374.825L611.332 374.593L610.308 372.582C611.06 371.823 611.823 371.106 612.594 370.384C612.076 371.915 611.974 371.733 612.053 372.678C611.706 372.714 611.328 372.719 610.947 372.725C611.309 373.057 611.67 373.389 612.028 373.723L613.374 373.037C614.457 372.063 614.03 372.421 615.387 372.528C614.68 373.733 613.965 374.941 613.261 376.145C611.299 375.08 606.37 379.797 604.184 382.835C602.93 382.066 604.651 381.986 603.111 381.833C601.481 381.724 600.342 383.947 597.67 385.637C597.585 386.197 597.492 386.76 597.4 387.323C599.986 387.46 598.744 387.671 600.547 385.72C600.443 386.242 600.35 386.805 600.258 387.369C606.868 383.578 613.7 374.513 619.742 374.391L620.518 371.462C620.743 371.159 620.969 370.857 621.213 370.592C619.459 371.72 620.498 370.862 619.357 372.523L618.541 370.92C617.158 372.657 617.236 372.102 617.55 373.444C615.861 372.427 616.663 372.863 616.766 370.793C615.284 370.938 615.878 370.87 614.76 371.298C615.901 369.169 619.662 370.49 620.403 367.907C620.855 367.067 620.975 367.146 620.004 367.125C620.906 365.915 622.48 366.614 624.718 365.24L626.708 364.695C626.478 367.205 627.318 366.308 624.875 366.661C624.469 367.713 624.059 368.766 623.665 369.859C623.701 368.808 623.733 367.759 623.77 366.708C622.894 367.482 623.388 367.043 622.387 368.445C622.049 369.649 621.716 370.852 621.367 372.015L622.263 371.558L622.681 372.378C623.51 370.594 623.221 371.774 622.768 370.315C626.888 370.75 629.077 368.086 633.072 366.05C633.276 364.961 633.461 363.835 633.639 362.712C633.744 363.737 633.811 363.281 634.751 362.661C634.583 363.075 634.415 363.49 634.265 363.941C637.083 363.632 641.313 360.678 640.43 358.219C642.99 357.947 642.068 358.511 643.789 357.024C643.697 357.587 643.612 358.146 643.519 358.71C644.489 358.028 645.488 357.378 646.457 356.696C645.653 355.136 646.021 355.84 644.773 354.504C648.791 355.179 648.779 352.37 651.017 351.605C650.879 351.628 650.726 351.565 650.636 351.517C650.983 351.481 651.36 351.477 651.737 351.473C651.461 351.473 651.234 351.541 651.017 351.605C653.263 351.681 659.421 345.118 659.738 343.783C659.513 344.085 659.288 344.387 659.043 344.653C659.896 342.482 661.591 341.947 661.446 339.346C663.661 339.344 661.629 340.238 663.664 339.248C664.19 339.168 664.701 339.049 665.227 338.968C664.584 338.451 663.941 337.934 663.279 337.38C664.267 337.158 663.735 337.805 664.183 336.919C665.627 337.122 665.162 336.937 666.368 337.87C668.584 334.301 669.199 333.191 674.542 331.641C673.975 331.273 673.389 330.868 672.822 330.5C674.076 330.377 675.341 330.248 676.595 330.126C675.602 329.271 674.598 328.422 673.597 327.571C674.916 327.556 676.25 327.58 677.568 327.565C677.512 327.078 677.444 326.596 677.388 326.109L676.247 327.206L675.189 326.244C676.836 325.733 676.417 325.242 677.926 323.817C677.701 324.119 677.456 324.385 677.231 324.687C679.49 325.554 681.084 324.976 681.703 323.441C681.458 323.706 681.233 324.009 680.996 324.27C682.459 320.475 706.951 300.065 708.43 299.077C707.711 298.411 707.019 297.778 706.3 297.112C708.879 295.939 710.779 293.141 712.962 290.151C715.492 289.332 714.309 286.697 714.703 284.666C716.824 284.618 715.412 283.648 717.13 284.978C718.278 283.314 717.884 283.186 718.79 281.551C718.372 281.107 717.938 280.625 717.52 280.181C717.954 280.288 718.388 280.395 718.822 280.502C720.474 280.13 718.855 281.283 721.703 280.583L721.285 279.764C721.782 279.699 722.707 275.52 722.363 274.1C736.41 271.682 746.902 247.472 759.194 239.661C759.197 239.612 759.197 239.566 759.2 239.517C759.241 239.543 759.279 239.571 759.294 239.563C759.87 239.222 760.439 238.886 761 238.6C760.771 237.027 760.538 235.457 760.308 233.885L762.558 232.738C762.028 232.773 781.961 215.156 781.961 215.156C782.608 213.466 783.263 211.772 783.91 210.081L782.467 207.25C780.952 208.35 779.453 209.489 777.931 210.594C778.722 208.266 777.873 208.558 778.947 207.026C779.679 207.966 778.633 207.467 780.008 207.987ZM85.569 543.99C85.58 543.937 85.606 543.924 85.636 543.909C85.051 544.113 84.925 544.177 85.569 543.99Z",
  fill: "currentColor"
}));
/* harmony default export */ __webpack_exports__["default"] = (shapes);

/***/ }),

/***/ "./assets/src/admin/utils/tabs.js":
/*!****************************************!*\
  !*** ./assets/src/admin/utils/tabs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Internal block libraries
 */
var Dashicon = wp.components.Dashicon;
var tabs = [{
  name: 'desktop',
  title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "desktop"
  })
}, {
  name: 'laptop',
  title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "laptop"
  })
}, {
  name: 'tablet',
  title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "tablet"
  })
}, {
  name: 'smartphone',
  title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
    icon: "smartphone"
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./assets/src/admin/utils/transforms.js":
/*!**********************************************!*\
  !*** ./assets/src/admin/utils/transforms.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal block libraries
 */
var createBlock = wp.blocks.createBlock;
var transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['*'],
    __experimentalConvert: function __experimentalConvert(blocks) {
      // Avoid transforming a single `my/container` Block
      if (blocks.length === 1 && blocks[0].name === 'my/container') {
        return;
      } // End If Statement


      var alignments = ['wide', 'full']; // Determine the widest setting of all the blocks to be grouped

      var widestAlignment = blocks.reduce(function (accumulator, block) {
        var align = block.attributes.align;
        return alignments.indexOf(align) > alignments.indexOf(accumulator) ? align : accumulator;
      }, undefined); // Clone the Blocks to be wrapped into a container block
      // Failing to create new block references causes the original blocks
      // to be replaced in the switchToBlockType call thereby meaning they
      // are removed both from their original location and within the
      // new container block.

      var wrapInnerBlocks = blocks.map(function (_ref) {
        var name = _ref.name,
            attributes = _ref.attributes,
            innerBlocks = _ref.innerBlocks;
        return createBlock(name, attributes, innerBlocks);
      });
      return createBlock('my/container', {
        align: widestAlignment
      }, wrapInnerBlocks);
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./assets/src/admin/utils/withColors.js":
/*!**********************************************!*\
  !*** ./assets/src/admin/utils/withColors.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal block libraries
 */
var withColors = wp.blockEditor.withColors;
/**
 * Generate block colors.
 */

var applyWithColors = withColors('backgroundColor');
/* harmony default export */ __webpack_exports__["default"] = (applyWithColors);

/***/ }),

/***/ "./assets/src/admin/utils/withSelect.js":
/*!**********************************************!*\
  !*** ./assets/src/admin/utils/withSelect.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Internal block libraries
 */
var withSelect = wp.data.withSelect;
/**
 * Generate block data.
 */

var applyWithSelect = withSelect(function (select, _ref) {
  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock,
      getSettings = _select.getSettings;

  var block = getBlock(clientId);
  return {
    colors: getSettings().colors,
    hasInnerBlocks: !!(block && block.innerBlocks.length)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (applyWithSelect);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./assets/src/admin/style.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./assets/src/admin/style.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=script.js.map