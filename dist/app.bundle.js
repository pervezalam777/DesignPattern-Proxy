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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proxies_user_collection_proxy_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxies/user-collection-proxy-factory */ "./src/proxies/user-collection-proxy-factory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var userCollectionProxy = _proxies_user_collection_proxy_factory__WEBPACK_IMPORTED_MODULE_0__["UserCollectionProxyFactory"].create(_proxies_user_collection_proxy_factory__WEBPACK_IMPORTED_MODULE_0__["FOR_ROLE"].SINGLE);
      var collection = userCollectionProxy.getUserByFirstName("anil");
      console.log("users with first name 'Anil' : ", collection);
      collection = userCollectionProxy.getUserByLastName("gupta");
      console.log("user with last name 'Gupta' : ", collection);
      var completeUserList = userCollectionProxy.getUserList();
      console.log("Basic user details :", completeUserList);
      var userCollectionProxyforAdmin = _proxies_user_collection_proxy_factory__WEBPACK_IMPORTED_MODULE_0__["UserCollectionProxyFactory"].create(_proxies_user_collection_proxy_factory__WEBPACK_IMPORTED_MODULE_0__["FOR_ROLE"].ADMIN);
      collection = userCollectionProxyforAdmin.getUserByFirstName("sunil");
      console.log("users with first name 'Sunil' : ", collection);
      collection = userCollectionProxyforAdmin.getUserByLastName("kumar");
      console.log("user with last name 'kumar' : ", collection);
      completeUserList = userCollectionProxyforAdmin.getUserList();
      console.log("advance user details :", completeUserList);
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ }),

/***/ "./src/model/user-collection.ts":
/*!**************************************!*\
  !*** ./src/model/user-collection.ts ***!
  \**************************************/
/*! exports provided: UserCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCollection", function() { return UserCollection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserCollection =
/*#__PURE__*/
function () {
  function UserCollection() {
    _classCallCheck(this, UserCollection);

    _defineProperty(this, "userList", void 0);

    this.userList = [{
      fname: "anil",
      lname: "kumar",
      id: "001",
      token: "t0x1",
      phone: 98323213,
      address: "delhi"
    }, {
      fname: "sunil",
      lname: "kumar",
      id: "002",
      token: "t0w1",
      phone: 98323413,
      address: "delhi"
    }, {
      fname: "mukesh",
      lname: "kumar",
      id: "003",
      token: "t0f1",
      phone: 98380213,
      address: "delhi"
    }, {
      fname: "anil",
      lname: "gupta",
      id: "004",
      token: "t0x1",
      phone: 98328213,
      address: "delhi"
    }, {
      fname: "suresh",
      lname: "gupta",
      id: "005",
      token: "t0x1",
      phone: 98322213,
      address: "delhi"
    }, {
      fname: "akash",
      lname: "chopra",
      id: "006",
      token: "t0x1",
      phone: 98321213,
      address: "delhi"
    }, {
      fname: "anil",
      lname: "chopra",
      id: "007",
      token: "t0x1",
      phone: 98327213,
      address: "delhi"
    }, {
      fname: "gaurav",
      lname: "chopra",
      id: "008",
      token: "t0x1",
      phone: 98324213,
      address: "delhi"
    }, {
      fname: "bharat",
      lname: "verma",
      id: "009",
      token: "t0x1",
      phone: 98325213,
      address: "delhi"
    }, {
      fname: "vineet",
      lname: "panday",
      id: "010",
      token: "t0x1",
      phone: 98326213,
      address: "delhi"
    }, {
      fname: "anil",
      lname: "verma",
      id: "011",
      token: "t0x1",
      phone: 98383213,
      address: "delhi"
    }, {
      fname: "rohit",
      lname: "panday",
      id: "012",
      token: "t0x1",
      phone: 98393213,
      address: "delhi"
    }];
  }

  _createClass(UserCollection, [{
    key: "getUserByFirstName",
    value: function getUserByFirstName(keyword) {
      var list = [];
      this.userList.reduce(function (cList, value) {
        if (value.fname === keyword) {
          cList.push({
            fname: value.fname,
            lname: value.lname,
            id: value.id
          });
        }

        return cList;
      }, list);
      return list;
    }
  }, {
    key: "getUserByLastName",
    value: function getUserByLastName(keyword) {
      var list = [];
      this.userList.reduce(function (cList, value) {
        if (value.lname === keyword) {
          cList.push({
            fname: value.fname,
            lname: value.lname,
            id: value.id
          });
        }

        return cList;
      }, list);
      return list;
    }
  }, {
    key: "getUserList",
    value: function getUserList() {
      return this.userList;
    }
  }]);

  return UserCollection;
}();

/***/ }),

/***/ "./src/proxies/user-collection-proxy-admin.ts":
/*!****************************************************!*\
  !*** ./src/proxies/user-collection-proxy-admin.ts ***!
  \****************************************************/
/*! exports provided: UserCollectionProxyForAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCollectionProxyForAdmin", function() { return UserCollectionProxyForAdmin; });
/* harmony import */ var _user_collection_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-collection-proxy */ "./src/proxies/user-collection-proxy.ts");
/* harmony import */ var _model_user_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user-collection */ "./src/model/user-collection.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UserCollectionProxyForAdmin =
/*#__PURE__*/
function (_UserCollectionProxy) {
  _inherits(UserCollectionProxyForAdmin, _UserCollectionProxy);

  function UserCollectionProxyForAdmin() {
    _classCallCheck(this, UserCollectionProxyForAdmin);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserCollectionProxyForAdmin).apply(this, arguments));
  }

  _createClass(UserCollectionProxyForAdmin, [{
    key: "fetUserList",
    value: function fetUserList() {
      var userColl = new _model_user_collection__WEBPACK_IMPORTED_MODULE_1__["UserCollection"]();
      return userColl.getUserList();
    }
  }]);

  return UserCollectionProxyForAdmin;
}(_user_collection_proxy__WEBPACK_IMPORTED_MODULE_0__["UserCollectionProxy"]);

/***/ }),

/***/ "./src/proxies/user-collection-proxy-factory.ts":
/*!******************************************************!*\
  !*** ./src/proxies/user-collection-proxy-factory.ts ***!
  \******************************************************/
/*! exports provided: FOR_ROLE, UserCollectionProxyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_ROLE", function() { return FOR_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCollectionProxyFactory", function() { return UserCollectionProxyFactory; });
/* harmony import */ var _user_collection_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-collection-proxy */ "./src/proxies/user-collection-proxy.ts");
/* harmony import */ var _user_collection_proxy_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-collection-proxy-admin */ "./src/proxies/user-collection-proxy-admin.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FOR_ROLE = {
  SINGLE: "singleuser",
  ADMIN: "admin"
};
var UserCollectionProxyFactory =
/*#__PURE__*/
function () {
  function UserCollectionProxyFactory() {
    _classCallCheck(this, UserCollectionProxyFactory);
  }

  _createClass(UserCollectionProxyFactory, null, [{
    key: "create",
    value: function create() {
      var userRole = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FOR_ROLE.SINGLE;

      if (userRole === FOR_ROLE.ADMIN) {
        return new _user_collection_proxy_admin__WEBPACK_IMPORTED_MODULE_1__["UserCollectionProxyForAdmin"]();
      }

      return new _user_collection_proxy__WEBPACK_IMPORTED_MODULE_0__["UserCollectionProxy"]();
    }
  }]);

  return UserCollectionProxyFactory;
}();

/***/ }),

/***/ "./src/proxies/user-collection-proxy.ts":
/*!**********************************************!*\
  !*** ./src/proxies/user-collection-proxy.ts ***!
  \**********************************************/
/*! exports provided: UserCollectionProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCollectionProxy", function() { return UserCollectionProxy; });
/* harmony import */ var _model_user_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user-collection */ "./src/model/user-collection.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var UserCollectionProxy =
/*#__PURE__*/
function () {
  function UserCollectionProxy() {
    _classCallCheck(this, UserCollectionProxy);

    _defineProperty(this, "cacheFNameSearchResults", []);

    _defineProperty(this, "cacheLNameSearchResults", []);

    _defineProperty(this, "userCollection", null);

    _defineProperty(this, "holdForMinute", 2);

    _defineProperty(this, "interval", -1);
  }

  _createClass(UserCollectionProxy, [{
    key: "getUserByFirstName",
    value: function getUserByFirstName(keyword) {
      var results = this.cacheFNameSearchResults[keyword] || null;

      if (results === null) {
        var userColl = new _model_user_collection__WEBPACK_IMPORTED_MODULE_0__["UserCollection"]();
        results = userColl.getUserByFirstName(keyword);
      }

      return results;
    }
  }, {
    key: "getUserByLastName",
    value: function getUserByLastName(keyword) {
      var results = this.cacheLNameSearchResults[keyword] || null;

      if (results === null) {
        var userColl = new _model_user_collection__WEBPACK_IMPORTED_MODULE_0__["UserCollection"]();
        results = userColl.getUserByLastName(keyword);
      }

      return results;
    }
  }, {
    key: "getUserList",
    value: function getUserList() {
      if (this.userCollection === null) {
        this.userCollection = this.fetUserList();
      }

      this.setUpUserCollectionDestruction();
      return this.userCollection;
    }
  }, {
    key: "fetUserList",
    value: function fetUserList() {
      var userColl = new _model_user_collection__WEBPACK_IMPORTED_MODULE_0__["UserCollection"]();
      var list = [];
      userColl.getUserList().reduce(function (cList, value) {
        var user = {
          fname: value.fname,
          lname: value.lname,
          id: value.id
        };
        cList.push(user);
        return cList;
      }, list);
      return list;
    }
  }, {
    key: "setUpUserCollectionDestruction",
    value: function setUpUserCollectionDestruction() {
      var _this = this;

      if (this.interval !== -1) {
        clearTimeout(this.interval);
      }

      this.interval = setTimeout(function () {
        _this.userCollection = null;
      }, this.holdForMinute * 60 * 1000);
    }
  }]);

  return UserCollectionProxy;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC91c2VyLWNvbGxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3hpZXMvdXNlci1jb2xsZWN0aW9uLXByb3h5LWFkbWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm94aWVzL3VzZXItY29sbGVjdGlvbi1wcm94eS1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm94aWVzL3VzZXItY29sbGVjdGlvbi1wcm94eS50cyJdLCJuYW1lcyI6WyJCb290c3RyYXAiLCJ1c2VyQ29sbGVjdGlvblByb3h5IiwiVXNlckNvbGxlY3Rpb25Qcm94eUZhY3RvcnkiLCJjcmVhdGUiLCJGT1JfUk9MRSIsIlNJTkdMRSIsImNvbGxlY3Rpb24iLCJnZXRVc2VyQnlGaXJzdE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckJ5TGFzdE5hbWUiLCJjb21wbGV0ZVVzZXJMaXN0IiwiZ2V0VXNlckxpc3QiLCJ1c2VyQ29sbGVjdGlvblByb3h5Zm9yQWRtaW4iLCJBRE1JTiIsImJvb3QiLCJpbml0aWFsaXplIiwiVXNlckNvbGxlY3Rpb24iLCJ1c2VyTGlzdCIsImZuYW1lIiwibG5hbWUiLCJpZCIsInRva2VuIiwicGhvbmUiLCJhZGRyZXNzIiwia2V5d29yZCIsImxpc3QiLCJyZWR1Y2UiLCJjTGlzdCIsInZhbHVlIiwicHVzaCIsIlVzZXJDb2xsZWN0aW9uUHJveHlGb3JBZG1pbiIsInVzZXJDb2xsIiwiVXNlckNvbGxlY3Rpb25Qcm94eSIsInVzZXJSb2xlIiwicmVzdWx0cyIsImNhY2hlRk5hbWVTZWFyY2hSZXN1bHRzIiwiY2FjaGVMTmFtZVNlYXJjaFJlc3VsdHMiLCJ1c2VyQ29sbGVjdGlvbiIsImZldFVzZXJMaXN0Iiwic2V0VXBVc2VyQ29sbGVjdGlvbkRlc3RydWN0aW9uIiwidXNlciIsImludGVydmFs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S0FBd0IsSUFBM0IsRUFBZ0M7QUFDNUIsYUFBS0EsY0FBTCxHQUFzQixLQUFLQyxXQUFMLEVBQXRCO0FBQ0g7O0FBQ0QsV0FBS0MsOEJBQUw7QUFDQSxhQUFPLEtBQUtGLGNBQVo7QUFDSDtBQWhDTDtBQUFBO0FBQUEsa0NBa0N1RTtBQUMvRCxVQUFJTixRQUF1QixHQUFHLElBQUlmLHFFQUFKLEVBQTlCO0FBQ0EsVUFBSVMsSUFBMkIsR0FBRyxFQUFsQztBQUNBTSxjQUFRLENBQUNwQixXQUFULEdBQXVCZSxNQUF2QixDQUE4QixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDNUMsWUFBSVksSUFBb0IsR0FBRztBQUFDdEIsZUFBSyxFQUFDVSxLQUFLLENBQUNWLEtBQWI7QUFDUEMsZUFBSyxFQUFDUyxLQUFLLENBQUNULEtBREw7QUFDWUMsWUFBRSxFQUFDUSxLQUFLLENBQUNSO0FBRHJCLFNBQTNCO0FBRUFPLGFBQUssQ0FBQ0UsSUFBTixDQUFXVyxJQUFYO0FBQ0EsZUFBT2IsS0FBUDtBQUNILE9BTEQsRUFLR0YsSUFMSDtBQU1BLGFBQU9BLElBQVA7QUFDSDtBQTVDTDtBQUFBO0FBQUEscURBK0M0QztBQUFBOztBQUNwQyxVQUFHLEtBQUtnQixRQUFMLEtBQWtCLENBQUMsQ0FBdEIsRUFBd0I7QUFDcEJDLG9CQUFZLENBQUMsS0FBS0QsUUFBTixDQUFaO0FBQ0g7O0FBQ0QsV0FBS0EsUUFBTCxHQUFnQkUsVUFBVSxDQUFDLFlBQUk7QUFDM0IsYUFBSSxDQUFDTixjQUFMLEdBQXVCLElBQXZCO0FBQ0gsT0FGeUIsRUFFdkIsS0FBS08sYUFBTCxHQUFtQixFQUFuQixHQUFzQixJQUZDLENBQTFCO0FBR0g7QUF0REw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFVzZXJDb2xsZWN0aW9uUHJveHlGYWN0b3J5LCBGT1JfUk9MRSB9IGZyb20gXCIuL3Byb3hpZXMvdXNlci1jb2xsZWN0aW9uLXByb3h5LWZhY3RvcnlcIjtcbmltcG9ydCB7IElCYXNpY1VzZXJNb2RlbCB9IGZyb20gXCIuL2ludGVyZmFjZXMvaS11c2VyLWRldGFpbFwiO1xuXG5jbGFzcyBCb290c3RyYXAge1xuXG4gICAgY29uc3RydWN0b3IoKXsgIH1cblxuICAgIGluaXRpYWxpemUoKXtcblxuICAgICAgICBsZXQgdXNlckNvbGxlY3Rpb25Qcm94eSA9IFVzZXJDb2xsZWN0aW9uUHJveHlGYWN0b3J5LmNyZWF0ZShGT1JfUk9MRS5TSU5HTEUpO1xuICAgICAgICBsZXQgY29sbGVjdGlvbjpBcnJheTxJQmFzaWNVc2VyTW9kZWw+ID0gIHVzZXJDb2xsZWN0aW9uUHJveHkuZ2V0VXNlckJ5Rmlyc3ROYW1lKFwiYW5pbFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXJzIHdpdGggZmlyc3QgbmFtZSAnQW5pbCcgOiBcIiwgY29sbGVjdGlvbik7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9ICB1c2VyQ29sbGVjdGlvblByb3h5LmdldFVzZXJCeUxhc3ROYW1lKFwiZ3VwdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciB3aXRoIGxhc3QgbmFtZSAnR3VwdGEnIDogXCIsIGNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGxldCBjb21wbGV0ZVVzZXJMaXN0ID0gdXNlckNvbGxlY3Rpb25Qcm94eS5nZXRVc2VyTGlzdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJhc2ljIHVzZXIgZGV0YWlscyA6XCIsIGNvbXBsZXRlVXNlckxpc3QpO1xuXG5cbiAgICAgICAgbGV0IHVzZXJDb2xsZWN0aW9uUHJveHlmb3JBZG1pbiA9IFVzZXJDb2xsZWN0aW9uUHJveHlGYWN0b3J5LmNyZWF0ZShGT1JfUk9MRS5BRE1JTik7XG4gICAgICAgIGNvbGxlY3Rpb24gPSB1c2VyQ29sbGVjdGlvblByb3h5Zm9yQWRtaW4uZ2V0VXNlckJ5Rmlyc3ROYW1lKFwic3VuaWxcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcnMgd2l0aCBmaXJzdCBuYW1lICdTdW5pbCcgOiBcIiwgY29sbGVjdGlvbik7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9ICB1c2VyQ29sbGVjdGlvblByb3h5Zm9yQWRtaW4uZ2V0VXNlckJ5TGFzdE5hbWUoXCJrdW1hclwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIHdpdGggbGFzdCBuYW1lICdrdW1hcicgOiBcIiwgY29sbGVjdGlvbik7XG5cbiAgICAgICAgY29tcGxldGVVc2VyTGlzdCA9IHVzZXJDb2xsZWN0aW9uUHJveHlmb3JBZG1pbi5nZXRVc2VyTGlzdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkdmFuY2UgdXNlciBkZXRhaWxzIDpcIiwgY29tcGxldGVVc2VyTGlzdCk7XG5cbiAgICB9XG59ICAgXG5cbmxldCBib290ID0gbmV3IEJvb3RzdHJhcCgpO1xuYm9vdC5pbml0aWFsaXplKCk7ICAiLCJpbXBvcnQgeyBJVXNlckNvbGxlY3Rpb24sIElBZHZhbmNlVXNlck1vZGVsLCBJQmFzaWNVc2VyTW9kZWwgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLXVzZXItZGV0YWlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb2xsZWN0aW9uIGltcGxlbWVudHMgSVVzZXJDb2xsZWN0aW9uIHtcclxuICAgIHByaXZhdGUgdXNlckxpc3Q6QXJyYXk8SUFkdmFuY2VVc2VyTW9kZWw+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IFtcclxuICAgICAgICAgICAge2ZuYW1lOlwiYW5pbFwiLCBsbmFtZTpcImt1bWFyXCIsIGlkOlwiMDAxXCIsIHRva2VuOlwidDB4MVwiLCBwaG9uZTo5ODMyMzIxMywgYWRkcmVzczpcImRlbGhpXCJ9LFxyXG4gICAgICAgICAgICB7Zm5hbWU6XCJzdW5pbFwiLCBsbmFtZTpcImt1bWFyXCIsIGlkOlwiMDAyXCIsIHRva2VuOlwidDB3MVwiLCBwaG9uZTo5ODMyMzQxMywgYWRkcmVzczpcImRlbGhpXCJ9LFxyXG4gICAgICAgICAgICB7Zm5hbWU6XCJtdWtlc2hcIiwgbG5hbWU6XCJrdW1hclwiLCBpZDpcIjAwM1wiLCB0b2tlbjpcInQwZjFcIiwgcGhvbmU6OTgzODAyMTMsIGFkZHJlc3M6XCJkZWxoaVwifSxcclxuICAgICAgICAgICAge2ZuYW1lOlwiYW5pbFwiLCBsbmFtZTpcImd1cHRhXCIsIGlkOlwiMDA0XCIsIHRva2VuOlwidDB4MVwiLCBwaG9uZTo5ODMyODIxMywgYWRkcmVzczpcImRlbGhpXCJ9LFxyXG4gICAgICAgICAgICB7Zm5hbWU6XCJzdXJlc2hcIiwgbG5hbWU6XCJndXB0YVwiLCBpZDpcIjAwNVwiLCB0b2tlbjpcInQweDFcIiwgcGhvbmU6OTgzMjIyMTMsIGFkZHJlc3M6XCJkZWxoaVwifSxcclxuICAgICAgICAgICAge2ZuYW1lOlwiYWthc2hcIiwgbG5hbWU6XCJjaG9wcmFcIiwgaWQ6XCIwMDZcIiwgdG9rZW46XCJ0MHgxXCIsIHBob25lOjk4MzIxMjEzLCBhZGRyZXNzOlwiZGVsaGlcIn0sXHJcbiAgICAgICAgICAgIHtmbmFtZTpcImFuaWxcIiwgbG5hbWU6XCJjaG9wcmFcIiwgaWQ6XCIwMDdcIiwgdG9rZW46XCJ0MHgxXCIsIHBob25lOjk4MzI3MjEzLCBhZGRyZXNzOlwiZGVsaGlcIn0sXHJcbiAgICAgICAgICAgIHtmbmFtZTpcImdhdXJhdlwiLCBsbmFtZTpcImNob3ByYVwiLCBpZDpcIjAwOFwiLCB0b2tlbjpcInQweDFcIiwgcGhvbmU6OTgzMjQyMTMsIGFkZHJlc3M6XCJkZWxoaVwifSxcclxuICAgICAgICAgICAge2ZuYW1lOlwiYmhhcmF0XCIsIGxuYW1lOlwidmVybWFcIiwgaWQ6XCIwMDlcIiwgdG9rZW46XCJ0MHgxXCIsIHBob25lOjk4MzI1MjEzLCBhZGRyZXNzOlwiZGVsaGlcIn0sXHJcbiAgICAgICAgICAgIHtmbmFtZTpcInZpbmVldFwiLCBsbmFtZTpcInBhbmRheVwiLCBpZDpcIjAxMFwiLCB0b2tlbjpcInQweDFcIiwgcGhvbmU6OTgzMjYyMTMsIGFkZHJlc3M6XCJkZWxoaVwifSxcclxuICAgICAgICAgICAge2ZuYW1lOlwiYW5pbFwiLCBsbmFtZTpcInZlcm1hXCIsIGlkOlwiMDExXCIsIHRva2VuOlwidDB4MVwiLCBwaG9uZTo5ODM4MzIxMywgYWRkcmVzczpcImRlbGhpXCJ9LFxyXG4gICAgICAgICAgICB7Zm5hbWU6XCJyb2hpdFwiLCBsbmFtZTpcInBhbmRheVwiLCBpZDpcIjAxMlwiLCB0b2tlbjpcInQweDFcIiwgcGhvbmU6OTgzOTMyMTMsIGFkZHJlc3M6XCJkZWxoaVwifSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRVc2VyQnlGaXJzdE5hbWUoa2V5d29yZDpzdHJpbmcpOkFycmF5PElCYXNpY1VzZXJNb2RlbD57XHJcbiAgICAgICAgbGV0IGxpc3Q6QXJyYXk8SUJhc2ljVXNlck1vZGVsPiA9IFtdXHJcbiAgICAgICAgdGhpcy51c2VyTGlzdC5yZWR1Y2UoKGNMaXN0LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5mbmFtZSA9PT0ga2V5d29yZCl7XHJcbiAgICAgICAgICAgICAgICBjTGlzdC5wdXNoKHtmbmFtZTp2YWx1ZS5mbmFtZSwgbG5hbWU6dmFsdWUubG5hbWUsIGlkOnZhbHVlLmlkfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY0xpc3RcclxuICAgICAgICB9LCBsaXN0KVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRVc2VyQnlMYXN0TmFtZShrZXl3b3JkOnN0cmluZyk6QXJyYXk8SUJhc2ljVXNlck1vZGVsPntcclxuICAgICAgICBsZXQgbGlzdDpBcnJheTxJQmFzaWNVc2VyTW9kZWw+ID0gW11cclxuICAgICAgICB0aGlzLnVzZXJMaXN0LnJlZHVjZSgoY0xpc3QsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmxuYW1lID09PSBrZXl3b3JkKXtcclxuICAgICAgICAgICAgICAgIGNMaXN0LnB1c2goe2ZuYW1lOnZhbHVlLmZuYW1lLCBsbmFtZTp2YWx1ZS5sbmFtZSwgaWQ6dmFsdWUuaWR9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjTGlzdFxyXG4gICAgICAgIH0sIGxpc3QpXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckxpc3QoKTpBcnJheTxJQmFzaWNVc2VyTW9kZWwgfCBJQWR2YW5jZVVzZXJNb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMaXN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXNlckNvbGxlY3Rpb25Qcm94eSB9IGZyb20gXCIuL3VzZXItY29sbGVjdGlvbi1wcm94eVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29sbGVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbC91c2VyLWNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUFkdmFuY2VVc2VyTW9kZWwsIElCYXNpY1VzZXJNb2RlbCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktdXNlci1kZXRhaWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29sbGVjdGlvblByb3h5Rm9yQWRtaW4gZXh0ZW5kcyBVc2VyQ29sbGVjdGlvblByb3h5IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZmV0VXNlckxpc3QoKTpBcnJheTxJQmFzaWNVc2VyTW9kZWwgfCBJQWR2YW5jZVVzZXJNb2RlbD4ge1xyXG4gICAgICAgIGxldCB1c2VyQ29sbDpVc2VyQ29sbGVjdGlvbiA9IG5ldyBVc2VyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB1c2VyQ29sbC5nZXRVc2VyTGlzdCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXNlckNvbGxlY3Rpb25Qcm94eSB9IGZyb20gXCIuL3VzZXItY29sbGVjdGlvbi1wcm94eVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29sbGVjdGlvblByb3h5Rm9yQWRtaW4gfSBmcm9tIFwiLi91c2VyLWNvbGxlY3Rpb24tcHJveHktYWRtaW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT1JfUk9MRSA9IHtcclxuICAgIFNJTkdMRTpcInNpbmdsZXVzZXJcIixcclxuICAgIEFETUlOOlwiYWRtaW5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbGxlY3Rpb25Qcm94eUZhY3RvcnkgIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHVzZXJSb2xlID0gRk9SX1JPTEUuU0lOR0xFKXtcclxuICAgICAgICBpZih1c2VyUm9sZSA9PT0gRk9SX1JPTEUuQURNSU4pe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJDb2xsZWN0aW9uUHJveHlGb3JBZG1pbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVXNlckNvbGxlY3Rpb25Qcm94eSgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJVXNlckNvbGxlY3Rpb24sIElCYXNpY1VzZXJNb2RlbCwgSUFkdmFuY2VVc2VyTW9kZWwgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLXVzZXItZGV0YWlsXCI7XHJcbmltcG9ydCB7IFVzZXJDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVsL3VzZXItY29sbGVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb2xsZWN0aW9uUHJveHkgaW1wbGVtZW50cyBJVXNlckNvbGxlY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBjYWNoZUZOYW1lU2VhcmNoUmVzdWx0czphbnkgPSBbXTtcclxuICAgIHByaXZhdGUgY2FjaGVMTmFtZVNlYXJjaFJlc3VsdHM6YW55ID0gW107XHJcbiAgICBwcml2YXRlIHVzZXJDb2xsZWN0aW9uOkFycmF5PElCYXNpY1VzZXJNb2RlbCB8IElBZHZhbmNlVXNlck1vZGVsPiB8IG51bGwgPSBudWxsO1xyXG4gICAgLy8gSG9sZCBkYXRhIG9mIHVzZXJDb2xsZWN0aW9uIGZvciBkZWZpbmVkIG1pbnV0ZXNcclxuICAgIHByaXZhdGUgaG9sZEZvck1pbnV0ZTpudW1iZXIgPSAyO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDpudW1iZXIgPSAtMTtcclxuXHJcbiAgICBnZXRVc2VyQnlGaXJzdE5hbWUoa2V5d29yZDpzdHJpbmcpOkFycmF5PElCYXNpY1VzZXJNb2RlbD57XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmNhY2hlRk5hbWVTZWFyY2hSZXN1bHRzW2tleXdvcmRdIHx8IG51bGxcclxuICAgICAgICBpZihyZXN1bHRzID09PSBudWxsKXtcclxuICAgICAgICAgICAgbGV0IHVzZXJDb2xsOlVzZXJDb2xsZWN0aW9uID0gbmV3IFVzZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSB1c2VyQ29sbC5nZXRVc2VyQnlGaXJzdE5hbWUoa2V5d29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8QXJyYXk8SUJhc2ljVXNlck1vZGVsPj5yZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRVc2VyQnlMYXN0TmFtZShrZXl3b3JkOnN0cmluZyk6QXJyYXk8SUJhc2ljVXNlck1vZGVsPntcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuY2FjaGVMTmFtZVNlYXJjaFJlc3VsdHNba2V5d29yZF0gfHwgbnVsbFxyXG4gICAgICAgIGlmKHJlc3VsdHMgPT09IG51bGwpe1xyXG4gICAgICAgICAgICBsZXQgdXNlckNvbGw6VXNlckNvbGxlY3Rpb24gPSBuZXcgVXNlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IHVzZXJDb2xsLmdldFVzZXJCeUxhc3ROYW1lKGtleXdvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPEFycmF5PElCYXNpY1VzZXJNb2RlbD4+cmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyTGlzdCgpOkFycmF5PElCYXNpY1VzZXJNb2RlbCB8IElBZHZhbmNlVXNlck1vZGVsPiB7XHJcbiAgICAgICAgaWYodGhpcy51c2VyQ29sbGVjdGlvbiA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckNvbGxlY3Rpb24gPSB0aGlzLmZldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VXBVc2VyQ29sbGVjdGlvbkRlc3RydWN0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckNvbGxlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGZldFVzZXJMaXN0KCk6QXJyYXk8SUJhc2ljVXNlck1vZGVsIHwgSUFkdmFuY2VVc2VyTW9kZWw+IHtcclxuICAgICAgICBsZXQgdXNlckNvbGw6VXNlckNvbGxlY3Rpb24gPSBuZXcgVXNlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICBsZXQgbGlzdDpBcnJheTxJQmFzaWNVc2VyTW9kZWw+ID0gW107XHJcbiAgICAgICAgdXNlckNvbGwuZ2V0VXNlckxpc3QoKS5yZWR1Y2UoKGNMaXN0LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXNlcjpJQmFzaWNVc2VyTW9kZWwgPSB7Zm5hbWU6dmFsdWUuZm5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuYW1lOnZhbHVlLmxuYW1lLCBpZDp2YWx1ZS5pZH07XHJcbiAgICAgICAgICAgIGNMaXN0LnB1c2godXNlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBjTGlzdDtcclxuICAgICAgICB9LCBsaXN0KVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldFVwVXNlckNvbGxlY3Rpb25EZXN0cnVjdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuaW50ZXJ2YWwgIT09IC0xKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJDb2xsZWN0aW9uID0gIG51bGw7XHJcbiAgICAgICAgfSwgdGhpcy5ob2xkRm9yTWludXRlKjYwKjEwMDApXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==