/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6268:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Navbar.js + 4 modules
var Navbar = __webpack_require__(103);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 10 modules
var Nav = __webpack_require__(4160);
;// CONCATENATED MODULE: ./src/Header/index.jsx




function Logo() {
  return /*#__PURE__*/react.createElement("div", {
    className: 'logo'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'icon-logo'
  }), /*#__PURE__*/react.createElement("p", null, "tajam"));
}

function Header() {
  return /*#__PURE__*/react.createElement("header", null, /*#__PURE__*/react.createElement(Navbar/* default */.Z, {
    className: 'fixed-header-bg pe-4 ps-4',
    expand: 'lg',
    fixed: 'top'
  }, /*#__PURE__*/react.createElement(Navbar/* default.Brand */.Z.Brand, {
    href: '#'
  }, /*#__PURE__*/react.createElement(Logo, null)), /*#__PURE__*/react.createElement(Navbar/* default.Toggle */.Z.Toggle, {
    "aria-controls": "responsive-navbar-nav"
  }), /*#__PURE__*/react.createElement(Navbar/* default.Collapse */.Z.Collapse, {
    id: 'responsive-navbar-nav',
    className: 'justify-content-end'
  }, /*#__PURE__*/react.createElement(Nav/* default */.Z, null, /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link__active",
    href: "#"
  }, "Home")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "About")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "Expertise")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "Teams")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "Works")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "People")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    className: "header-nav-link",
    href: "#"
  }, "Contact"))))));
}

/* harmony default export */ const src_Header = (Header);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/InputGroup.js
var InputGroup = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 28 modules
var Modal = __webpack_require__(8888);
;// CONCATENATED MODULE: ./src/PrimaryButton/index.jsx



function PrimaryButton(_ref) {
  var children = _ref.children,
      figure = _ref.figure,
      onClick = _ref.onClick,
      label = _ref.label;
  return /*#__PURE__*/react.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    figure: figure,
    className: "btn btn-outline-primary main-btn"
  }, children);
}

/* harmony default export */ const src_PrimaryButton = (PrimaryButton);
;// CONCATENATED MODULE: ./src/EmployerCards/EmployerCards.pug
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __macro = {
  "for": function _for(items) {
    return {
      map: function map(mapFn) {
        var mapFns = [];

        if (items && items['@@__IMMUTABLE_MAP__@@']) {
          items.mapEntries(function (_ref, i) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            mapFns.push(mapFn(value, key, i));
          });
        } else if (items && items['@@__IMMUTABLE_LIST__@@']) {
          items.forEach(function (value, i) {
            mapFns.push(mapFn(value, i, i));
          });
        } else if (Array.isArray(items)) {
          mapFns = items.map(function (value, index) {
            return mapFn(value, index, index);
          });
        } else {
          mapFns = Object.keys(items || []).map(function (key, index) {
            return mapFn(items[key], key, index);
          });
        }

        return mapFns;
      }
    };
  }
};
/* harmony default export */ function EmployerCards() {
  return __macro["for"]([{
    name: 'semf ucuk',
    position: 'CEO & FOUNDER'
  }, {
    name: 'dik adalin',
    position: 'engineering'
  }, {
    name: 'jeng kol',
    position: 'designer'
  }, {
    name: 'pet romak',
    position: 'marketing'
  }]).map(function (val, key) {
    return /*#__PURE__*/react.createElement("div", {
      className: "col",
      key: key
    }, /*#__PURE__*/react.createElement("div", {
      className: "employer-wrap"
    }, /*#__PURE__*/react.createElement("div", {
      className: "default-image"
    }), /*#__PURE__*/react.createElement("h3", null, val.name), /*#__PURE__*/react.createElement("div", {
      className: "description"
    }, "val.position")));
  });
}
;// CONCATENATED MODULE: ./src/EmployerCards/index.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var EmployerCard = /*#__PURE__*/function (_React$Component) {
  _inherits(EmployerCard, _React$Component);

  var _super = _createSuper(EmployerCard);

  function EmployerCard() {
    _classCallCheck(this, EmployerCard);

    return _super.apply(this, arguments);
  }

  _createClass(EmployerCard, [{
    key: "render",
    value: function render() {
      return EmployerCards.call(this, {});
    }
  }]);

  return EmployerCard;
}(react.Component);

/* harmony default export */ const src_EmployerCards = (EmployerCard);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/md/MdKeyboardArrowRight.js
var MdKeyboardArrowRight = __webpack_require__(3274);
;// CONCATENATED MODULE: ./src/images/1-face.png
/* harmony default export */ const _1_face = (__webpack_require__.p + "images/1-face.2a581ee5e247b337ff8c33b0e19fa513.png");
;// CONCATENATED MODULE: ./src/images/2-face.png
/* harmony default export */ const _2_face = (__webpack_require__.p + "images/2-face.de82a94d206be4c7f4115b79707157a0.png");
;// CONCATENATED MODULE: ./src/images/3-face.png
/* harmony default export */ const _3_face = (__webpack_require__.p + "images/3-face.12216d6eadf887a6dbba360a60c21108.png");
;// CONCATENATED MODULE: ./src/images/4-face.png
/* harmony default export */ const _4_face = (__webpack_require__.p + "images/4-face.3f31475bfcaee1930f786c87dd3dabac.png");
;// CONCATENATED MODULE: ./src/images/5-face.png
/* harmony default export */ const _5_face = (__webpack_require__.p + "images/5-face.a0b14b66d6fc08768441b7d6c4ea9d15.png");
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/ai/AiOutlinePhone.js
var AiOutlinePhone = __webpack_require__(8594);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaTelegramPlane.js
var FaTelegramPlane = __webpack_require__(1569);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaFacebookF.js
var FaFacebookF = __webpack_require__(2916);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaTwitter.js
var FaTwitter = __webpack_require__(1362);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bi/BiBasketball.js
var BiBasketball = __webpack_require__(3531);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaInstagram.js
var FaInstagram = __webpack_require__(681);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/ai/AiOutlineGooglePlus.js
var AiOutlineGooglePlus = __webpack_require__(7733);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaYoutube.js
var FaYoutube = __webpack_require__(8320);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/fa/FaMapMarkerAlt.js
var FaMapMarkerAlt = __webpack_require__(4078);
;// CONCATENATED MODULE: ./src/useWindowSize.jsx
function useWindowSize_slicedToArray(arr, i) { return useWindowSize_arrayWithHoles(arr) || useWindowSize_iterableToArrayLimit(arr, i) || useWindowSize_unsupportedIterableToArray(arr, i) || useWindowSize_nonIterableRest(); }

function useWindowSize_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useWindowSize_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useWindowSize_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useWindowSize_arrayLikeToArray(o, minLen); }

function useWindowSize_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useWindowSize_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useWindowSize_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useWindowSize() {
  var _useState = (0,react.useState)({
    width: undefined,
    height: undefined
  }),
      _useState2 = useWindowSize_slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  (0,react.useEffect)(function () {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/io5/IoClose.js
var IoClose = __webpack_require__(5981);
// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring-web.esm.js
var react_spring_web_esm = __webpack_require__(1472);
// EXTERNAL MODULE: ./node_modules/react-spring/dist/react-spring.esm.js
var react_spring_esm = __webpack_require__(9920);
;// CONCATENATED MODULE: ./src/Mentions/useHeight.jsx
function useHeight_slicedToArray(arr, i) { return useHeight_arrayWithHoles(arr) || useHeight_iterableToArrayLimit(arr, i) || useHeight_unsupportedIterableToArray(arr, i) || useHeight_nonIterableRest(); }

function useHeight_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useHeight_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useHeight_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useHeight_arrayLikeToArray(o, minLen); }

function useHeight_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useHeight_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useHeight_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useHeight() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? true : _ref$on;

  var ref = (0,react.useRef)();

  var _useState = (0,react.useState)(0),
      _useState2 = useHeight_slicedToArray(_useState, 2),
      height = _useState2[0],
      set = _useState2[1];

  var heightRef = (0,react.useRef)(height);

  var _useState3 = (0,react.useState)(function () {
    return new ResizeObserver(function (packet) {
      if (ref.current && heightRef.current !== ref.current.offsetHeight) {
        heightRef.current = ref.current.offsetHeight;
        set(ref.current.offsetHeight);
      }
    });
  }),
      _useState4 = useHeight_slicedToArray(_useState3, 1),
      ro = _useState4[0];

  (0,react.useLayoutEffect)(function () {
    if (on && ref.current) {
      set(ref.current.offsetHeight);
      ro.observe(ref.current, {});
    }

    return function () {
      return ro.disconnect();
    };
  }, [on, ref.current]);
  return [ref, height];
}
;// CONCATENATED MODULE: ./src/Mentions/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Mentions_slicedToArray(arr, i) { return Mentions_arrayWithHoles(arr) || Mentions_iterableToArrayLimit(arr, i) || Mentions_unsupportedIterableToArray(arr, i) || Mentions_nonIterableRest(); }

function Mentions_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Mentions_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Mentions_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mentions_arrayLikeToArray(o, minLen); }

function Mentions_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Mentions_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Mentions_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Mentions = function Mentions(_ref) {
  var open = _ref.open,
      children = _ref.children;

  var _useHeight = useHeight(),
      _useHeight2 = Mentions_slicedToArray(_useHeight, 2),
      heightRef = _useHeight2[0],
      height = _useHeight2[1];

  var slideInStyles = (0,react_spring_web_esm.useSpring)({
    config: _objectSpread({}, react_spring_esm.config.stiff),
    from: {
      opacity: 0,
      height: 0
    },
    to: {
      opacity: open ? 1 : 0,
      height: open ? height : 0
    }
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(react_spring_web_esm/* animated.div */.q.div, {
    style: _objectSpread({
      overflow: "hidden"
    }, slideInStyles)
  }, /*#__PURE__*/react.createElement("div", {
    ref: heightRef
  }, children)));
};
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/io/IoIosArrowDown.js
var IoIosArrowDown = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/io/IoIosArrowUp.js
var IoIosArrowUp = __webpack_require__(5625);
;// CONCATENATED MODULE: ./src/App.jsx
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























function App() {
  var _useState = (0,react.useState)(false),
      _useState2 = App_slicedToArray(_useState, 2),
      videoModal = _useState2[0],
      setVideoModal = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = App_slicedToArray(_useState3, 2),
      openMentions = _useState4[0],
      setMentions = _useState4[1];

  var size = useWindowSize();

  var onClickPlay = function onClickPlay() {
    setVideoModal(true);
  };

  var onClosePlay = function onClosePlay() {
    setVideoModal(false);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(src_Header, null), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-1'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-1__overlay'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: 'full-h-center'
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, {
    className: 'align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    sm: 10,
    className: 'd-flex flex-column align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement("h1", null, "We Are Awesome Creative Agency"), /*#__PURE__*/react.createElement("hr", {
    className: 'divider'
  }), /*#__PURE__*/react.createElement("p", null, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."), /*#__PURE__*/react.createElement(src_PrimaryButton, null, "Learn More")))))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-2 pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: 'full-h-center'
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'img-logo'
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    sm: 8
  }, /*#__PURE__*/react.createElement("h2", null, "our story"), /*#__PURE__*/react.createElement("p", null, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus."), /*#__PURE__*/react.createElement("p", null, "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."), /*#__PURE__*/react.createElement(src_PrimaryButton, null, "Learn More"))))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-3'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-3__overlay align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement(src_PrimaryButton, {
    onClick: onClickPlay,
    figure: 'circle'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'icon-play'
  })), /*#__PURE__*/react.createElement("h3", null, "watch our story"))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-4 pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'd-flex flex-column align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement("h2", null, "expertise"), /*#__PURE__*/react.createElement("p", null, "Lorem ipsum dolor sit amet proin gravida nibh vel velit"), /*#__PURE__*/react.createElement("hr", {
    className: 'divider'
  })), [{
    name: 'design',
    title: 'WEB DESIGN & DEVELOPMENT',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }, {
    name: 'brand',
    title: 'BRANDING IDENTITY',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }, {
    name: 'mobile',
    title: 'mobile app',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }, {
    name: 'opt',
    title: 'engine optimization',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }, {
    name: 'game',
    title: 'game development',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }, {
    name: 'love',
    title: 'made love',
    content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
  }].map(function (item, idx) {
    return /*#__PURE__*/react.createElement(Col/* default */.Z, {
      key: "item-expertise-".concat(idx)
    }, /*#__PURE__*/react.createElement("div", {
      className: 'd-flex flex-column align-items-center justify-content-center min-px-150'
    }, /*#__PURE__*/react.createElement("div", {
      className: "icon-".concat(item.name)
    }), /*#__PURE__*/react.createElement("h3", null, item.title), /*#__PURE__*/react.createElement("p", null, item.content)));
  }).map(function (_, idx, arr) {
    return !((idx + 1) % 3) ? idx / 3 > 1 ? /*#__PURE__*/react.createElement(react.Fragment, {
      key: "row-expertise-".concat(idx)
    }, /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement(Row/* default */.Z, null, arr.slice(idx - 2, idx + 1))) : /*#__PURE__*/react.createElement(Row/* default */.Z, {
      key: "row-expertise-".concat(idx)
    }, arr.slice(idx - 2, idx + 1)) : null;
  }))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-5'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-5__overlay align-items-center justify-content-center pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'd-flex flex-column align-items-center justify-content-center title-wrap mb-4'
  }, /*#__PURE__*/react.createElement("h2", null, "meet our amazing team"), /*#__PURE__*/react.createElement("p", null, "Lorem ipsum dolor sit amet proin gravida nibh vel velit"), /*#__PURE__*/react.createElement("hr", {
    className: 'divider'
  })), /*#__PURE__*/react.createElement(Row/* default */.Z, {
    className: 'mb-5'
  }, /*#__PURE__*/react.createElement(src_EmployerCards, null)), /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: 'd-flex flex-column align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement("p", null, "Become part of our dream team, let\u2019s join us ! "), /*#__PURE__*/react.createElement(src_PrimaryButton, null, "we are hiring")))))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-6 pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, {
    className: 'mb-5'
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: 'd-flex align-items-center justify-content-between title-wrap'
  }, /*#__PURE__*/react.createElement("h2", null, "our works"), /*#__PURE__*/react.createElement("div", {
    className: 'd-flex align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement("p", null, "See All Project in dribbble"), /*#__PURE__*/react.createElement(MdKeyboardArrowRight/* MdKeyboardArrowRight */.A, null))))), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    className: 'ps-0 pe-0'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'projects'
  })), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: 'd-flex align-items-center justify-content-center mt-5'
  }, /*#__PURE__*/react.createElement(src_PrimaryButton, null, "Load more"))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-7'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-7__overlay pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: 'align-items-center justify-content-center'
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, {
    className: 'justify-content-center'
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    sm: 8
  }, /*#__PURE__*/react.createElement("div", {
    className: 'quote mt-4'
  }, "\u201C"), /*#__PURE__*/react.createElement("p", {
    className: 'mt-4'
  }, "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit."), /*#__PURE__*/react.createElement("div", {
    className: 'mt-5'
  }, /*#__PURE__*/react.createElement("h3", null, "jane galadriel"), /*#__PURE__*/react.createElement("div", {
    className: 'description'
  }, "CEO TENGKUREP")), /*#__PURE__*/react.createElement("div", {
    className: 'd-flex align-items-center justify-content-center emp-row mt-4',
    onClick: function onClick() {
      return setMentions(!openMentions);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: _1_face
  }), /*#__PURE__*/react.createElement("img", {
    src: _2_face
  }), /*#__PURE__*/react.createElement("img", {
    src: _3_face
  }), /*#__PURE__*/react.createElement("img", {
    src: _4_face
  }), /*#__PURE__*/react.createElement("img", {
    src: _5_face
  })), !openMentions && /*#__PURE__*/react.createElement(IoIosArrowDown/* IoIosArrowDown */.O, {
    color: '#fff'
  })))), /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Mentions, {
    open: openMentions
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'mentions-container'
  }, /*#__PURE__*/react.createElement("img", {
    src: _2_face
  }), /*#__PURE__*/react.createElement("h3", null, "Chris Brod"), /*#__PURE__*/react.createElement("p", null, "My mentions"))), /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'mentions-container'
  }, /*#__PURE__*/react.createElement("img", {
    src: _1_face
  }), /*#__PURE__*/react.createElement("h3", null, "Lana Del Rey"), /*#__PURE__*/react.createElement("p", null, "We present a model for tagging gene and protein mentions from text using the probabilistic sequence tagging framework of conditional random fields (CRFs)."))), /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: 'mentions-container'
  }, /*#__PURE__*/react.createElement("img", {
    src: _5_face
  }), /*#__PURE__*/react.createElement("h3", null, "Charlz Brod"), /*#__PURE__*/react.createElement("p", null, "We employ a diverse feature set containing standard orthographic features combined with expert features in the form of gene and biological term lexicons to achieve a precision of 86.4% and recall of 78.7%. An analysis of the contribution of the various features of the model is provided.")))), openMentions && /*#__PURE__*/react.createElement("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setMentions(!openMentions);
    }
  }, /*#__PURE__*/react.createElement(IoIosArrowUp/* IoIosArrowUp */.V, {
    color: '#fff'
  }))))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-8 pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, {
    className: 'justify-content-center'
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    sm: 6
  }, /*#__PURE__*/react.createElement("h2", {
    className: 'mb-5'
  }, "give us a good news"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control mb-3",
    placeholder: "Name"
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control mb-3",
    placeholder: "Email*"
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control mb-3",
    placeholder: "Subject"
  }), /*#__PURE__*/react.createElement("textarea", {
    className: "form-control mb-3",
    "aria-label": "Your Message"
  }), /*#__PURE__*/react.createElement(src_PrimaryButton, null, "submit"))))), /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-9'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'wrapper-9__overlay pt-5 pb-5'
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: 'justify-content-start logo-content'
  }, /*#__PURE__*/react.createElement(Logo, null), /*#__PURE__*/react.createElement("p", null, "lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit")), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: 'justify-content-start studios'
  }, /*#__PURE__*/react.createElement("h3", null, "our studio"), /*#__PURE__*/react.createElement("div", {
    className: 'd-flex align-items-start'
  }, /*#__PURE__*/react.createElement(FaMapMarkerAlt/* FaMapMarkerAlt */.N, {
    size: 25
  }), "Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia"), /*#__PURE__*/react.createElement("div", {
    className: 'd-flex align-items-center'
  }, /*#__PURE__*/react.createElement(AiOutlinePhone/* AiOutlinePhone */.N, null), "(+62) 21-2224 3333")), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: 'justify-content-start social'
  }, /*#__PURE__*/react.createElement("h3", null, "stay in touch"), /*#__PURE__*/react.createElement(InputGroup/* default */.Z, null, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Subscribe our newsletter",
    "aria-describedby": "addon1"
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline-secondary",
    type: "button"
  }, /*#__PURE__*/react.createElement(FaTelegramPlane/* FaTelegramPlane */.A, null))), /*#__PURE__*/react.createElement("div", {
    className: 'd-flex social-links'
  }, /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(FaFacebookF/* FaFacebookF */.t, null)), /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(FaTwitter/* FaTwitter */.f, null)), /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(BiBasketball/* BiBasketball */.M, null)), /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(FaInstagram/* FaInstagram */.Z, null)), /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(AiOutlineGooglePlus/* AiOutlineGooglePlus */.d, null)), /*#__PURE__*/react.createElement("div", {
    className: 'circle'
  }, /*#__PURE__*/react.createElement(FaYoutube/* FaYoutube */.V, null))))), /*#__PURE__*/react.createElement(Row/* default */.Z, null)))), /*#__PURE__*/react.createElement(Modal/* default */.Z, {
    show: videoModal,
    onHide: onClosePlay,
    centered: true
  }, /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, {
    closeLabel: 'close-video'
  }, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, null, "Video"), /*#__PURE__*/react.createElement(src_PrimaryButton, {
    onClick: onClosePlay,
    label: 'close-video'
  }, /*#__PURE__*/react.createElement(IoClose/* IoClose */.b, null))), /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("iframe", {
    width: '100%',
    height: size.height / 2,
    src: "https://www.youtube.com/embed/KvUgaHTNit4",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))));
}

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.jsx





react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App, null)), document.getElementById('app'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend_test_mid"] = self["webpackChunkfrontend_test_mid"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(6268)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.461fd6b4fcfaedfdc355.js.map