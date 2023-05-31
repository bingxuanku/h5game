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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/index.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./src/css/puzzle.css":
/*!****************************!*\
  !*** ./src/css/puzzle.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/images/clipart.png":
/*!********************************!*\
  !*** ./src/images/clipart.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/clipart-fbd686.png";

/***/ }),

/***/ "./src/images/covers/a.jpg":
/*!*********************************!*\
  !*** ./src/images/covers/a.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/a-b62648.jpg";

/***/ }),

/***/ "./src/images/covers/b.jpg":
/*!*********************************!*\
  !*** ./src/images/covers/b.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/b-617030.jpg";

/***/ }),

/***/ "./src/images/covers/c.jpg":
/*!*********************************!*\
  !*** ./src/images/covers/c.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/c-218762.jpg";

/***/ }),

/***/ "./src/images/covers/d.jpg":
/*!*********************************!*\
  !*** ./src/images/covers/d.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/d-5b5e47.jpg";

/***/ }),

/***/ "./src/images/covers/e.jpg":
/*!*********************************!*\
  !*** ./src/images/covers/e.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/e-364604.jpg";

/***/ }),

/***/ "./src/images/pause@2x.png":
/*!*********************************!*\
  !*** ./src/images/pause@2x.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/pause@2x-fef54b.png";

/***/ }),

/***/ "./src/images/pictures/a.jpg":
/*!***********************************!*\
  !*** ./src/images/pictures/a.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/a-85b826.jpg";

/***/ }),

/***/ "./src/images/pictures/b.jpg":
/*!***********************************!*\
  !*** ./src/images/pictures/b.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/b-c9b29e.jpg";

/***/ }),

/***/ "./src/images/pictures/c.jpg":
/*!***********************************!*\
  !*** ./src/images/pictures/c.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/c-21e980.jpg";

/***/ }),

/***/ "./src/images/pictures/d.jpg":
/*!***********************************!*\
  !*** ./src/images/pictures/d.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/d-d7cfe9.jpg";

/***/ }),

/***/ "./src/images/pictures/e.jpg":
/*!***********************************!*\
  !*** ./src/images/pictures/e.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/e-55ce8c.jpg";

/***/ }),

/***/ "./src/images/play@2x.png":
/*!********************************!*\
  !*** ./src/images/play@2x.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/play@2x-982c2f.png";

/***/ }),

/***/ "./src/images/shade.jpg":
/*!******************************!*\
  !*** ./src/images/shade.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/shade-bc0975.jpg";

/***/ }),

/***/ "./src/script/Puzzle.es6":
/*!*******************************!*\
  !*** ./src/script/Puzzle.es6 ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pixi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pixi */ "@pixi");
/* harmony import */ var _pixi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pixi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pixi_extra_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pixi-extra-filters */ "@pixi-extra-filters");
/* harmony import */ var _pixi_extra_filters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pixi_extra_filters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/tween-max */ "@gsap/tween-max");
/* harmony import */ var _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/utils */ "./src/script/lib/utils.es6");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_Gridistribution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/Gridistribution */ "./src/script/lib/Gridistribution.es6");
/* harmony import */ var _lib_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/timer */ "./src/script/lib/timer.es6");
/* harmony import */ var _lib_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/Event */ "./src/script/lib/Event.es6");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
	@ author: leeenx
	@ 拼图
*/





// 安装模块




_pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].skipHello();
var Puzzle = /*#__PURE__*/function () {
  function Puzzle() {
    var _this = this;
    _classCallCheck(this, Puzzle);
    this.width = 375;
    this.height = 603;

    // 事件兼容
    if (window.hasOwnProperty('ontouchstart') === true) {
      this.touchstart = 'touchstart';
      this.touchmove = 'touchmove';
      this.touchend = 'touchend';
      this.tap = 'tap';
    } else {
      this.touchstart = 'mousedown';
      this.touchmove = 'mousemove';
      this.touchend = 'mouseup';
      this.tap = 'click';
    }

    // 全屏适配
    var _document$body = document.body,
      clientWidth = _document$body.clientWidth,
      clientHeight = _document$body.clientHeight;
    var clientRatio = clientWidth / clientHeight;
    // 长屏
    if (clientRatio < this.width / this.height) {
      this.height = this.width / clientRatio;
    }
    // 短屏
    else {
      this.width = this.height * clientRatio;
    }

    // 拼图尺寸
    this.imageWidth = 300 * .88 >> 0;
    this.imageHeight = 450 * .88 >> 0;

    // 图片与视窗的比率 
    this.imageRatio = this.imageWidth / this.width;
    this.app = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Application"]({
      width: this.width,
      height: this.height,
      transparent: true,
      view: document.getElementById('puzzleGame'),
      antialias: true
    });
    this.stage = this.app.stage;
    this.renderer = this.app.renderer;
    this.ticker = this.app.ticker;
    this.app.view.addEventListener(this.touchstart, function (e) {
      return e.preventDefault();
    });

    // 事件
    this.event = new _lib_Event__WEBPACK_IMPORTED_MODULE_6__["default"]();

    // 默认倒计时长
    this.totalTime = 60;

    // 做挂起监听
    document.addEventListener('visibilitychange', function (e) {
      e.hidden === true ? _this.pause() : _this.isOff !== true && _this.resume();
    }, true);
  }
  _createClass(Puzzle, [{
    key: "difficulty",
    get: function get() {
      return this._difficulty;
    },
    set: function set(value) {
      if (this._difficulty !== value) {
        this._difficulty = value;
        this.setDifficulty();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      // 拼图容器
      this.puzzle = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      this.puzzle.set({
        x: this.width / 2,
        y: this.height / 2,
        pivotX: this.imageWidth / 2,
        pivotY: this.imageHeight / 2
      });
      // 加入舞台
      this.stage.addChild(this.puzzle);

      // 礼花容器
      this.fireworksContainer = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Container"]();

      // 拼图数组
      this.cliparts = [];
      var loader = new _pixi__WEBPACK_IMPORTED_MODULE_0__["loaders"].Loader();
      // 加载必须图片
      loader.add([{
        name: 'shade',
        url: __webpack_require__(/*! ../images/shade.jpg */ "./src/images/shade.jpg")
      }, {
        name: 'clipart',
        url: __webpack_require__(/*! ../images/clipart.png */ "./src/images/clipart.png")
      }, {
        name: 'pause',
        url: __webpack_require__(/*! ../images/pause@2x.png */ "./src/images/pause@2x.png")
      }, {
        name: 'play',
        url: __webpack_require__(/*! ../images/play@2x.png */ "./src/images/play@2x.png")
      }]).load(function () {
        var shade = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache['shade']);
        shade.set({
          alpha: .99,
          width: _this2.width,
          height: _this2.height
        });
        _this2.stage.addChildAt(shade, 0);
        // 开关
        _this2.on = _pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache['play'];
        _this2.off = _pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache['pause'];
        _this2["switch"].texture = _this2.paused === true ? _this2.on : _this2.off;
        _this2.loaded = true;
        // 生成礼花
        _this2.fireworks = [];
        // 默认礼花
        for (var i = 0; i < 24; ++i) {
          var rect = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
          var rr = Math.random() * 0xFF | 0;
          var rg = Math.random() * 0xFF | 0;
          var rb = Math.random() * 0xFF | 0;
          var width = 80;
          var height = 80;
          var mask = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache['clipart']);
          mask.set({
            width: width,
            height: height
          });
          rect.beginFill((rr << 16) + (rg << 8) + rb, 1).drawRect(0, 0, width, height);
          var sprite = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](rect.generateCanvasTexture());
          sprite.mask = mask;
          sprite.addChild(mask);
          var shell = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](sprite.generateCanvasTexture(_this2.renderer));
          _this2.fireworks[i] = shell;
        }
      });
      // 时间进度条容器
      this.timeProgressBack = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      this.timeProgressBack.beginFill(0x6190e7, 1).drawRect(0, 0, this.width, 5);
      this.timeProgressFront = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      this.timeProgressFront.beginFill(0x70BF41, 1).drawRect(0, 0, this.width, 5);
      this.timeProgressFront.scaleX = 0;
      this.timeProgressBack.addChild(this.timeProgressFront);
      this.stage.addChild(this.timeProgressBack);
      // 暂停按钮
      this["switch"] = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"]();
      this["switch"].set({
        width: 32,
        height: 32,
        y: 6,
        x: this.width - 36
      });
      this.stage.addChild(this["switch"]);
      this["switch"].interactive = true;
      this["switch"].on(this.tap, function (e) {
        return _this2.paused === true ? _this2.turnOn() : _this2.turnOff();
      });
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      this.resume();
      this["switch"].texture = this.off;
      this.event.dispatch('resume');
      this.isOff = false;
      this.renderer.render(this.stage);
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      this.pause();
      this["switch"].texture = this.on;
      this.event.dispatch('pause');
      this.isOff = true;
      this.renderer.render(this.stage);
    }
  }, {
    key: "timeProgress",
    set: function set(value) {
      var percent = (this.totalTime - value) / this.totalTime;
      this.timeProgressFront.scaleX = percent > 1 ? 1 : percent;
    }
    // 进入对应的图片
  }, {
    key: "enter",
    value: function enter(picture) {
      var _this3 = this;
      // 未加载成功 
      if (this.loaded !== true) {
        setTimeout(function () {
          return _this3.enter(picture, difficulty);
        }, 100);
        return;
      }
      // 销毁上次的拼块
      this.destroyCliparts();
      // 清空倒计时
      _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](this.timer);
      // 重置时长 
      this.currentTime = this.totalTime;
      this.timeProgressFront.scaleX = 0;

      // 清空所有动画
      _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].killAll();

      // 如果暂停了，恢复
      this.isOff === true && this.turnOn();
      this.showLoading();
      var afterLoad = function afterLoad() {
        // 生成拼图的底层纹理 
        var originBase = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache[picture]);
        // 重置尺寸 
        originBase.set({
          width: _this3.imageWidth,
          height: _this3.imageHeight
        });
        // this.base 挂载原始图片的快照 
        _this3.base = originBase.generateCanvasTexture(_this3.renderer);
        // 拼图的底片 
        _this3.negative = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_this3.base);
        _this3.negative.set({
          x: _this3.puzzle.x,
          y: _this3.puzzle.y,
          pivotX: _this3.puzzle.pivotX,
          pivotY: _this3.puzzle.pivotY,
          alpha: .2,
          visible: false
        });
        _this3.stage.addChildAt(_this3.negative, 1);
        _this3.clip();
        _this3.hideLoading();
        // 拼图收缩
        _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].fromTo(_this3.puzzle, 1, {
          scaleX: 1 / _this3.imageRatio,
          scaleY: 1 / _this3.imageRatio
        }, {
          scaleX: 1,
          scaleY: 1,
          // 拼图分散后，倒计时开始
          onComplete: function onComplete() {
            return _this3["break"]().then(function (e) {
              return _this3.countdown();
            });
          }
        });
      };
      _pixi__WEBPACK_IMPORTED_MODULE_0__["loader"].resources[picture] ? afterLoad() : _pixi__WEBPACK_IMPORTED_MODULE_0__["loader"].add(picture).load(afterLoad);
    }

    // 设置难度
  }, {
    key: "setDifficulty",
    value: function setDifficulty() {
      // 行列数生成
      this.col = this.difficulty * 2;
      this.row = this.difficulty * 3;
      // 总数
      this.total = this.col * this.row;
      /*
      	@ 计算拼块的尺寸
      	@ 原始大小: 300x300
      	@ 镂空尺寸为 65
      	@ (拼图宽 + 2个镂空) / 列数 = 拼块宽 - 镂空
      	@ 镂空 / 拼块宽 = 65 / 300
      */
      this.clipart = {};
      // 按照难度剪裁后的宽度 
      var width = this.imageWidth / (this.col * 235 / 300 - 65 * 2 / 300) >> 0;
      var clipWidth = width * 65 / 300 >> 0;
      Object.assign(this.clipart, {
        width: width,
        height: width,
        clipWidth: clipWidth
      });
    }

    // 显示加载
  }, {
    key: "showLoading",
    value: function showLoading() {}

    // 隐藏加载
  }, {
    key: "hideLoading",
    value: function hideLoading() {}

    // 将图像剪裁成拼图碎片
  }, {
    key: "clip",
    value: function clip() {
      // 清空 cliparts
      this.cliparts = [];
      // 清空数组
      this.cliparts = [];
      var x = 0;
      var y = 0;
      for (var row = 0; row < this.row; ++row) {
        x = 0;
        for (var col = 0; col < this.col; ++col) {
          var clipart = {
            index: row * this.col + col,
            width: this.clipart.width,
            height: this.clipart.height,
            x: x,
            y: y
          };
          var mask = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].TextureCache['clipart']);
          this.stage.addChild(mask);
          mask.width = mask.height = this.clipart.width;
          if (0 === row) {
            clipart.height -= this.clipart.clipWidth;
            mask.y = -this.clipart.clipWidth;
          }
          if (0 === col) {
            clipart.width -= this.clipart.clipWidth;
            mask.x = -this.clipart.clipWidth;
          }
          // 对底纹进行裁剪
          {
            var _x = clipart.x;
            var _y = clipart.y;
            var width = clipart.width;
            var height = clipart.height;
            if (_x + width > this.base.width) {
              width = this.base.width - _x;
            }
            if (_y + height > this.base.height) {
              height = this.base.height - _y;
            }
            // 拼块
            clipart.sprite = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](new _pixi__WEBPACK_IMPORTED_MODULE_0__["Texture"](this.base, new _pixi__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](_x, _y, width, height)));
            // 被选中的拼块
            clipart.selected = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Sprite"](clipart.sprite.texture);
          }
          // console.log(col, row, x, y)
          this.cliparts.push(clipart);
          clipart.sprite.set({
            left: x,
            top: y,
            mask: mask,
            cacheAsBitmap: true
          });
          clipart.selected.set({
            mask: mask,
            filters: [new _pixi_extra_filters__WEBPACK_IMPORTED_MODULE_1__["GlowFilter"](10, 1.5, 1.5, 0x333333, .3)],
            cacheAsBitmap: true
          });
          this.puzzle.addChild(clipart.sprite);

          // 下一个拼块的 x 坐标
          x += clipart.width - this.clipart.clipWidth;
          if (col === this.col - 1) {
            // 下一行拼块的 y 坐标
            y += clipart.height - this.clipart.clipWidth;
          }
        }
      }
    }
    // 打散拼块
  }, {
    key: "break",
    value: function _break() {
      var _this4 = this;
      // this.puzzle 的坐标
      var bounds = this.puzzle.getBounds();
      var _ref = [bounds.x, bounds.y],
        x = _ref[0],
        y = _ref[1];
      this.gridProps = {
        width: this.width,
        height: this.height,
        // 最小面积
        cell: {
          width: this.clipart.width * .8
        },
        // 标记禁区
        rectangles: [
        // 右上角暂停按钮
        {
          x: this.width - 36,
          y: 0,
          width: 36,
          height: 36
        },
        // 中心拼图底图区
        {
          x: (this.width - this.imageWidth) / 2,
          y: (this.height - this.imageHeight) / 2,
          width: this.imageWidth,
          height: this.imageHeight
        }]
      };
      var grid = new _lib_Gridistribution__WEBPACK_IMPORTED_MODULE_4__["default"](this.gridProps);
      // 提取随机格子
      var cells = grid.pick(this.cliparts.length);
      var count = 0;
      var width = this.gridProps.cell.width;
      while (cells.length === 0 && ++count < 10) {
        // 面积不够，取一半值
        width = width * .8;
        this.gridProps.cell.width = width;
        grid.reset(this.gridProps);
        cells = grid.pick(this.cliparts.length);
      }

      // 显示底片
      this.negative.visible = true;

      // 手指下的拼块（multiple touch）
      var activeCliparts = [];

      // 起始坐标（multiple touch）
      var startPositions = [];

      // 舞台添加事件
      this.stage.interactive = true;
      this.stage.on(this.touchmove, function (_ref2) {
        var data = _ref2.data,
          _ref2$data = _ref2.data,
          endPosition = _ref2$data.global,
          identifier = _ref2$data.identifier;
        var activeClipart = activeCliparts[identifier] || null;
        var startPosition = startPositions[identifier] || null;
        if (activeClipart !== null && startPosition !== null) {
          if (--activeClipart.negativeCount >= 0) {
            activeClipart.rotate += activeClipart.negativeRotate;
          }
          var left = activeClipart.x0 + endPosition.x - startPosition.x;
          var top = activeClipart.y0 + endPosition.y - startPosition.y;
          // 侧滑会导致负坐标直接调用touchend
          if (left < -_this4.puzzle.x) {
            touchendHandle({
              data: data
            });
            return;
          }
          activeClipart.selected.set({
            rotate: activeClipart.rotate,
            left: left,
            top: top
          });
        }
      });
      var touchendHandle = function touchendHandle(_ref3) {
        var identifier = _ref3.data.identifier;
        var activeClipart = activeCliparts[identifier] || null;
        if (activeClipart === null) return;
        // 吸附效果 
        if (Math.abs(activeClipart.x - activeClipart.selected.left) <= 15 && Math.abs(activeClipart.y - activeClipart.selected.top) <= 15) {
          activeClipart.selected.rotate = 0;
          activeClipart.selected.left = activeClipart.x;
          activeClipart.selected.top = activeClipart.y;
          // 锁定
          activeClipart.lock = true;
        }
        // 初始坐标值变化
        activeClipart.x0 = activeClipart.selected.left;
        activeClipart.y0 = activeClipart.selected.top;

        // 正常拼块与选中拼块属性同步
        activeClipart.sprite.set({
          top: activeClipart.selected.top,
          left: activeClipart.selected.left,
          rotate: activeClipart.selected.rotate
        });

        // 当前索引
        var index = activeClipart.selected.parent.getChildIndex(activeClipart.selected);

        // 移除选中拼块
        _this4.puzzle.removeChild(activeClipart.selected);
        // 将拼块安装到对应位置上
        if (activeClipart.lock === true) {
          _this4.fit(activeClipart);
        }
        // 替换成正常拼块
        else {
          _this4.puzzle.addChildAt(activeClipart.sprite, index);
        }

        // 清空对象
        delete activeCliparts[identifier];
        delete startPositions[identifier];
      };
      this.stage.on(this.touchend, touchendHandle);

      // 动画数组 
      var tweens = [];

      // 分布
      this.cliparts.forEach(function (clipart, index) {
        // 拼块
        var sprite = clipart.sprite;
        // 选中拼块
        var selected = clipart.selected;
        // 开启点击检测
        sprite.interactive = true;
        // 添加事件
        sprite.on(_this4.touchstart, function (_ref4) {
          var _ref4$data = _ref4.data,
            position = _ref4$data.global,
            identifier = _ref4$data.identifier;
          // 暂停中
          if (_this4.paused === true) return;
          // 固定
          if (clipart.lock === true) {
            // 禁止交互
            sprite.interactive = false;
            return;
          }
          var parent = sprite.parent;
          // 移除当前 sprite
          parent.removeChild(sprite);
          // 最高索引值
          var maxIndex = Math.max(parent.children.length - 1, 0);
          // 替换成 selected 
          parent.addChildAt(selected, maxIndex);

          // 拼块需要摆正 
          if (selected.rotate !== 0) {
            selected.needFitRotation = true;
            var _selected$toLocal = selected.toLocal(position),
              _x2 = _selected$toLocal.x,
              _y2 = _selected$toLocal.y;
            selected.origin = sprite.origin = [_x2, _y2];
            // origin会引起盒子位置变化，以下是修正位置
            clipart.x0 += selected.boxOffsetX;
            clipart.y0 += selected.boxOffsetY;
            selected.set({
              left: clipart.x0,
              top: clipart.y0
            });
          }
          activeCliparts[identifier] = clipart;
          startPositions[identifier] = {
            x: position.x,
            y: position.y
          };
        });
        clipart.rotate = (Math.random() - .5) * Math.PI / 4;
        clipart.x0 = cells[index].x - x;
        clipart.y0 = cells[index].y - y;

        // 边拖边回正角度参数
        clipart.negativeCount = 10;
        clipart.negativeRotate = -clipart.rotate / clipart.negativeCount;

        // 拼块的属性
        var props = {
          left: clipart.x0,
          top: clipart.y0,
          rotate: clipart.rotate
        };

        // 拼块
        // TweenMax.to(sprite, .6, props)
        tweens.push(_gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(sprite, .3, props));
        // 选中拼块信息同步
        selected.set(props);
      });
      // 返回 Promise
      return new Promise(function (resolve) {
        var tl = new _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
        tl.add(tweens, 0, 'start', .01).call(function () {
          return resolve();
        });
      });
    }
    // 安装拼块
  }, {
    key: "fit",
    value: function fit(clipart) {
      // 当前拼块索引
      var index = clipart.index;
      // 左边拼块
      var leftClipart = index % this.col === 0 ? {
        lock: false
      } : this.cliparts[index - 1];
      // 右边拼块
      var rightClipart = index % this.col === this.col - 1 ? {
        lock: false
      } : this.cliparts[index + 1];
      // 上边拼块
      var upClipart = index < this.col ? {
        lock: false
      } : this.cliparts[index - this.col];
      // 下边的拼块
      var downClipart = index / this.col >> 0 === this.row - 1 ? {
        lock: false
      } : this.cliparts[index + this.col];
      // 容器
      var parent = null;
      // 左拼块存在
      if (leftClipart.lock === true) {
        parent = leftClipart.sprite.parent;
      }
      // 右拼块存在
      if (rightClipart.lock === true) {
        if (parent === null) {
          parent = rightClipart.sprite.parent;
        }
        // 合并容器
        else {
          var parentB = rightClipart.sprite.parent;
          if (parentB === null) console.log('报错了', rightClipart, rightClipart.sprite, rightClipart.selected);
          if (parent !== parentB) {
            var children = parentB.children;
            while (children.length > 0) {
              parent.addChild(children[0]);
            }
            // 销毁
            parentB.destroy();
          }
        }
      }
      // 上边拼块存在
      if (upClipart.lock === true) {
        if (parent === null) {
          parent = upClipart.sprite.parent;
        }
        // 合并容器
        else {
          var _parentB = upClipart.sprite.parent;
          if (_parentB === null) console.log('报错了', upClipart, upClipart.sprite, upClipart.selected);
          if (parent !== _parentB) {
            var _children = _parentB.children;
            while (_children.length > 0) {
              parent.addChild(_children[0]);
            }
            // 销毁
            _parentB.destroy();
          }
        }
      }
      // 下边拼块存在
      if (downClipart.lock === true) {
        if (parent === null) {
          parent = downClipart.sprite.parent;
        }
        // 合并容器
        else {
          var _parentB2 = downClipart.sprite.parent;
          if (_parentB2 === null) console.log('报错了', downClipart, downClipart.sprite, downClipart.selected);
          if (parent !== _parentB2) {
            var _children2 = _parentB2.children;
            while (_children2.length > 0) {
              parent.addChild(_children2[0]);
            }
            // 销毁
            _parentB2.destroy();
          }
        }
      }

      // 在一个空位置
      if (parent === null) {
        parent = new _pixi__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        // 与 puzzle 容器保持一致
        parent.set({
          x: this.puzzle.x,
          y: this.puzzle.y,
          pivotX: this.puzzle.pivotX,
          pivotY: this.puzzle.pivotY,
          scaleX: this.puzzle.scaleX,
          scaleY: this.puzzle.scaleY
        });
        this.stage.addChildAt(parent, 2);
      }

      // 当前拼块安装到对应的容器
      parent.addChild(clipart.sprite);

      // 容器的动画
      parent.tween && parent.tween.kill();
      parent.tween = _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].fromTo(parent, .6, {
        alpha: .4
      }, {
        alpha: 1,
        ease: _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["Linear"].easeNone
      });

      // 判断游戏是否通关
      if (this.puzzle.children.length === 0) {
        this.pass();
      }
    }
  }, {
    key: "pass",
    value: function pass() {
      var _this5 = this;
      _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](this.timer);
      this.displayShell().then(function (e) {
        return _this5.event.dispatch('pass', '通关');
      });
    }
    // 礼花
  }, {
    key: "displayShell",
    value: function displayShell() {
      var _this6 = this;
      this.stage.addChild(this.fireworksContainer);
      // 创建一条时间轴
      if (this.shellTimeline === undefined) {
        // 礼花随机位置
        this.gridProps.cell.width = 12;
        var rnd = new _lib_Gridistribution__WEBPACK_IMPORTED_MODULE_4__["default"](this.gridProps).pick(this.fireworks.length);
        // 时间轴数组
        var tls = rnd.map(function (_ref5, index) {
          var x = _ref5.x,
            y = _ref5.y;
          var shell = _this6.fireworks[index];
          shell.set({
            scaleX: 1,
            scaleY: 1,
            anchorX: .5,
            anchorY: .5,
            top: 90,
            left: 90
          });
          _this6.fireworksContainer.addChild(shell);
          var tl = new _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
          tl.fromTo(shell, .6, {
            rotation: 0,
            left: x,
            top: y,
            scaleX: 0,
            scaleY: 0,
            alpha: 0
          }, {
            rotation: Math.PI,
            scaleX: 1,
            scaleY: 1,
            alpha: .5
          }).to(shell, 1.2, {
            top: '+=560',
            left: (Math.random() > .5 ? '+' : '-') + '=80',
            rotation: 0,
            alpha: 0
          });
          return tl;
        });
        this.shellTimeline = new _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
        this.shellTimeline.pause();
        this.shellTimeline.add(tls, 0, 'start', 0.03);
      }
      return new Promise(function (resolve, reject) {
        _this6.shellTimeline.restart().call(function (e) {
          return _this6.stage.removeChild(_this6.fireworksContainer) & resolve();
        });
      });
    }
    // 销毁
  }, {
    key: "destroy",
    value: function destroy() {
      _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"].clean();
      _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].killAll();
      this.destroyChildren(this.stage);
      this.stage.off(this.touchmove);
      this.stage.off(this.touchend);
      // 销毁所有的纹理
      _pixi__WEBPACK_IMPORTED_MODULE_0__["utils"].destroyTextureCache();
      // 删除加载记录
      _pixi__WEBPACK_IMPORTED_MODULE_0__["loader"].reset();
      this.loaded = false;
      delete this.shellTimeline;
    }

    // 销毁子孙元素
  }, {
    key: "destroyChildren",
    value: function destroyChildren(parent) {
      var children = parent.children;
      while (children.length > 0) {
        var child = children[0];
        parent.removeChild(child);
        // 递归删除
        this.destroyChildren(child);
        child.destroy();
      }
    }

    // 销毁所有拼块
  }, {
    key: "destroyCliparts",
    value: function destroyCliparts() {
      var _this7 = this;
      this.cliparts.forEach(function (clipart) {
        var sprite = clipart.sprite,
          selected = clipart.selected,
          parentA = clipart.sprite.parent,
          parentB = clipart.selected.parent;
        sprite.destroy();
        selected.destroy();
        parentA !== null && parentA !== _this7.puzzle && parentA.destroy();
        parentB !== null && parentB !== _this7.puzzle && parentB.destroy();
      });
      this.negative && this.negative.destroy();
    }

    // 倒计时
  }, {
    key: "countdown",
    value: function countdown() {
      var _this8 = this;
      this.timer = _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"].setInterval(function (e) {
        _this8.currentTime -= .1;
        if (_this8.currentTime > 0) {
          _this8.timeProgress = _this8.currentTime;
        }
        // 游戏结束
        else {
          _this8.pause();
          _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"](_this8.timer);
          _this8.event.dispatch('gameover', '超时');
        }
      }, 100);
    }

    // 暂停
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].pauseAll();
      this.ticker.stop();
      _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"].pause();
    }
    // 恢复
  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
      _gsap_tween_max__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].resumeAll();
      this.ticker.start();
      _lib_timer__WEBPACK_IMPORTED_MODULE_5__["default"].resume();
    }
  }]);
  return Puzzle;
}();
/* harmony default export */ __webpack_exports__["default"] = (Puzzle);

/***/ }),

/***/ "./src/script/index.es6":
/*!******************************!*\
  !*** ./src/script/index.es6 ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Puzzle */ "./src/script/Puzzle.es6");
/* harmony import */ var _css_puzzle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/puzzle.css */ "./src/css/puzzle.css");
/* harmony import */ var _css_puzzle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_puzzle_css__WEBPACK_IMPORTED_MODULE_1__);



// 关卡信息
var levels = [{
  // 大图
  picture: __webpack_require__(/*! ../images/pictures/a.jpg */ "./src/images/pictures/a.jpg"),
  // 小图
  thumb: __webpack_require__(/*! ../images/covers/a.jpg */ "./src/images/covers/a.jpg"),
  // 描述
  instr: "秋天的银杏树",
  // 免费
  free: true
}, {
  // 大图
  picture: __webpack_require__(/*! ../images/pictures/b.jpg */ "./src/images/pictures/b.jpg"),
  // 小图
  thumb: __webpack_require__(/*! ../images/covers/b.jpg */ "./src/images/covers/b.jpg"),
  // 描述
  instr: "毕加索的画 ---- 少女",
  // 免费
  free: true
}, {
  // 大图
  picture: __webpack_require__(/*! ../images/pictures/c.jpg */ "./src/images/pictures/c.jpg"),
  // 小图
  thumb: __webpack_require__(/*! ../images/covers/c.jpg */ "./src/images/covers/c.jpg"),
  // 描述
  instr: "毕加索的画 ---- 树",
  // 免费
  free: true
}, {
  // 大图
  picture: __webpack_require__(/*! ../images/pictures/d.jpg */ "./src/images/pictures/d.jpg"),
  // 小图
  thumb: __webpack_require__(/*! ../images/covers/d.jpg */ "./src/images/covers/d.jpg"),
  // 描述
  instr: "毕加索的画 ---- 桥",
  // 免费
  free: true
}, {
  // 大图
  picture: __webpack_require__(/*! ../images/pictures/e.jpg */ "./src/images/pictures/e.jpg"),
  // 小图
  thumb: __webpack_require__(/*! ../images/covers/e.jpg */ "./src/images/covers/e.jpg"),
  // 描述
  instr: "不知道哪里来的美女",
  // 免费
  free: false
}];

// 从 localStorage 中读取记录
var record = JSON.parse(localStorage.getItem("puzzle-record")) || {
  level: -1,
  difficulty: 2
};
// 初始化列表
puzzleList.innerHTML = levels.map(function (level, index) {
  return "\n      <li\n        onclick=\"this.className === 'puzzle_lock' || selectLevel(".concat(index, ")\"\n        ").concat(record.level < index && level.free !== true ? 'class="puzzle_lock"' : '', "\n      >\n        <span class=\"puzzle_map_thumb\">\n          <img src=\"").concat(level.thumb, "\">\n        </span>\n        <span class=\"puzzle_map_instr\">\n          ").concat(level.instr, "<br>\n          <b>").concat(level.free === true ? '免费' : '解锁可玩', "</b>\n        </span>\n      </li>\n    ");
}).join("\n");
var puzzleLevel = puzzleList.querySelectorAll("li");

// 显示地图 
global.showPuzzleMap = function () {
  puzzleMap.className = "puzzle_map show";
};
// 隐藏地图
global.hidePuzzleMap = function () {
  puzzleMap.className = "puzzle_map";
};

// 选择关卡
global.selectLevel = function (index) {
  puzzleGame.className = "puzzle_game show";
  setTimeout(function () {
    puzzle.enter(levels[index].picture);
    record.level = index;
    updateRecord();
  }, 600);
};

// 返回
global.back = function () {
  puzzleAd.style.display = "none";
  puzzleGame.className = "puzzle_game";
};

// 更新记录
var updateRecord = function updateRecord() {
  localStorage.setItem("puzzle-record", JSON.stringify(record));
};

// 设置难度
var setDifficulty = function setDifficulty(difficulty) {
  difficulty = difficulty | 0;
  difficulty = difficulty > 1 ? difficulty : 1;
  difficultyOpts[difficulty - 1].checked = "checked";
  puzzle.difficulty = difficulty;
  puzzle.totalTime = difficulty * 120;
};

// 创建拼图对象
var puzzle = new _Puzzle__WEBPACK_IMPORTED_MODULE_0__["default"]();

// 默认进入第一张图
puzzle.init();
// 设置倒计时
puzzle.totalTime = 60;

// 通关
puzzle.event.on("pass", function () {
  if (record.level < levels.length - 1) {
    // 解锁
    puzzleLevel[++record.level].className = "";
    puzzle.enter(levels[record.level].picture);
    updateRecord();
  } else {
    alert("游戏结束");
  }
});

// 游戏结束
puzzle.event.on("gameover", function () {
  alert("超时了");
});

// 暂停显示广告
puzzle.event.on("pause", function () {
  puzzleAd.style.display = "block";
});

// 恢复隐藏广告
puzzle.event.on("resume", function () {
  puzzleAd.style.display = "none";
});

// 难度选项
var difficultyOpts = document.querySelectorAll(".puzzle_difficulty");
difficultyOpts.forEach(function (opt) {
  opt.addEventListener("click", function () {
    record.difficulty = this.value;
    puzzle.difficulty = this.value;
    updateRecord();
  });
});

// 同步游戏难度
setDifficulty(record.difficulty);

// 玩过 
if (record.level >= 0) {
  resumeGame.className = "puzzle_btn";
  resumeGame.onclick = function () {
    selectLevel(record.level);
  };
}
// 没玩过
else {
  resumeGame.className = "puzzle_btn disabled";
}
global.puzzle = puzzle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/script/lib/Event.es6":
/*!**********************************!*\
  !*** ./src/script/lib/Event.es6 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
	@ author: leeenx
	@ 事件封装
	@ object.on(event, fn) // 监听一个事件
	@ object.off(event, fn) // 取消监听
	@ object.once(event, fn) // 只监听一次事件
	@ object.dispacth(event, arg) // 触发一个事件
*/
var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);
    // 定义的事件与回调
    this.defineEvent = {};
  }
  // 注册事件
  _createClass(Event, [{
    key: "register",
    value: function register(event, cb) {
      if (!this.defineEvent[event]) {
        this.defineEvent[event] = [cb];
      } else {
        this.defineEvent[event].push(cb);
      }
    }
    // 派遣事件
  }, {
    key: "dispatch",
    value: function dispatch(event, arg) {
      if (this.defineEvent[event]) {
        {
          for (var i = 0, len = this.defineEvent[event].length; i < len; ++i) {
            this.defineEvent[event][i] && this.defineEvent[event][i](arg);
          }
        }
      }
    }
    // on 监听
  }, {
    key: "on",
    value: function on(event, cb) {
      return this.register(event, cb);
    }
    // off 方法
  }, {
    key: "off",
    value: function off(event, cb) {
      var _this = this;
      if (this.defineEvent[event]) {
        if (typeof cb == "undefined") {
          delete this.defineEvent[event]; // 表示全部删除 
        } else {
          var _loop = function _loop(i) {
            if (cb == _this.defineEvent[event][i]) {
              _this.defineEvent[event][i] = null; // 标记为空 - 防止dispath 长度变化 
              // 延时删除对应事件
              setTimeout(function () {
                return _this.defineEvent[event].splice(i, 1);
              }, 0);
              return "break";
            }
          };
          // 遍历查找 
          for (var i = 0, len = this.defineEvent[event].length; i < len; ++i) {
            var _ret = _loop(i);
            if (_ret === "break") break;
          }
        }
      }
    }

    // once 方法，监听一次
  }, {
    key: "once",
    value: function once(event, cb) {
      var _this2 = this;
      var onceCb = function onceCb() {
        cb && cb();
        _this2.off(event, onceCb);
      };
      this.register(event, onceCb);
    }
    // 清空所有事件
  }, {
    key: "clean",
    value: function clean() {
      this.defineEvent = {};
    }
  }]);
  return Event;
}();


/***/ }),

/***/ "./src/script/lib/Gridistribution.es6":
/*!********************************************!*\
  !*** ./src/script/lib/Gridistribution.es6 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gridistribution; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
	@ author: leeenx
	@ name: 网格随机分布算法
*/
var Gridistribution = /*#__PURE__*/function () {
  function Gridistribution() {
    _classCallCheck(this, Gridistribution);
    this.init.apply(this, arguments);
  }
  // 初始化
  _createClass(Gridistribution, [{
    key: "init",
    value: function init(_ref) {
      var width = _ref.width,
        height = _ref.height,
        _ref$cell = _ref.cell,
        cell = _ref$cell === void 0 ? {
          width: 10
        } : _ref$cell,
        _ref$rectangles = _ref.rectangles,
        rectangles = _ref$rectangles === void 0 ? [] : _ref$rectangles;
      width = width >> 0;
      height = height >> 0;
      // 格子的高默认与它的宽一样
      cell.height === undefined && (cell.height = cell.width);
      // 列数
      var col = width / cell.width >> 0;
      // 行数
      var row = height / cell.height >> 0;
      // 宽高修正
      // 表格数组
      var _ref2 = [width / col, height / row];
      cell.width = _ref2[0];
      cell.height = _ref2[1];
      this.grid = new Array(col * row);
      for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
          var index = i * col + j;
          this.grid[index] = {
            index: index,
            x: cell.width * j,
            y: cell.height * i,
            width: cell.width,
            height: cell.height
          };
        }
      }
      // 挂载属性
      Object.assign(this, {
        row: row,
        col: col,
        width: width,
        height: height,
        cell: cell
      });
      // 剔除不可分布成员
      this.trim(rectangles);
    }
    // 重置
  }, {
    key: "reset",
    value: function reset() {
      this.init.apply(this, arguments);
    }
  }, {
    key: "_shuffle",
    value: function _shuffle(a) {
      for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref3 = [a[j], a[i - 1]];
        a[i - 1] = _ref3[0];
        a[j] = _ref3[1];
      }
      return a;
    }
    // 从数组中剔除空洞
  }, {
    key: "trim",
    value: function trim(rectangles) {
      var _this = this;
      rectangles.forEach(function (_ref4) {
        var x = _ref4.x,
          y = _ref4.y,
          width = _ref4.width,
          height = _ref4.height;
        // 把 rectangle 框起的范围从 grid 中删除
        var startCol = x / _this.cell.width >> 0;
        var startRow = y / _this.cell.height >> 0;
        var endCol = (x + width) / _this.cell.width >> 0;
        var endRow = (y + height) / _this.cell.height >> 0;
        for (var i = startRow; i <= endRow; ++i) {
          for (var j = startCol; j <= endCol; ++j) {
            var index = i * _this.col + j;
            _this.grid[index].isRemoved = true;
          }
        }
      });
      // 生成压缩后的格子
      this.cells = this.grid.filter(function (cell) {
        return !cell.isRemoved;
      });
      this.shuffleCells = this._shuffle(this.cells.concat([]));
    }
    // 随机返回 count 个格子
  }, {
    key: "pick",
    value: function pick(count) {
      if (count > this.shuffleCells.length) {
        // throw("超出范围"); 
        return [];
      }
      return this.shuffleCells.slice(0, count);
    }
  }]);
  return Gridistribution;
}();


/***/ }),

/***/ "./src/script/lib/timer.es6":
/*!**********************************!*\
  !*** ./src/script/lib/timer.es6 ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
    author: leeenx
    @ timer 对象
    @ 提供 7 个API如下：
    @ timer.setTimeout(fun, delay[, id])
    @ timer.clearTimeout(id)
    @ timer.setInterval(fun, delay[, id])
    @ timer.clearInterval(id)
    @ timer.delete(id) 删除对应id的timeout/interval
    @ timer.pause(id) 暂停对应id的timeout/interval
    @ timer.resume(id) 恢复对应id的timeout/interval
    @ timer.clean() 清空所有 timeout & interval
*/
var Timer = /*#__PURE__*/function () {
  // 构造函数 
  function Timer() {
    _classCallCheck(this, Timer);
    // 暂停状态 - 这是个公共状态，由外部 Ticker 决定。
    this.paused = true;

    // 队列
    this.queue = new Map();

    // 正在使用 timer 的 RAF
    this.usingRAF = false;

    // useRAF 触发器
    Reflect.defineProperty(this, "useRAF", {
      set: function set(value) {
        Reflect.set(this, "usingRAF", value);
        value ? Timer.RAF.enable() : Timer.RAF.disable();
      }
    });
  }

  // setTimeout 的实现
  _createClass(Timer, [{
    key: "setTimeout",
    value: function setTimeout(fn, delay) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Symbol("timeoutID");
      // 存入队列 
      this.queue.set(id, {
        fn: fn,
        type: 0,
        paused: 0,
        elapsed: 0,
        delay: delay
      });
      return id;
    }

    // clearTimeout
  }, {
    key: "clearTimeout",
    value: function clearTimeout(id) {
      return this["delete"](id);
    }

    // setInterval 的实现
  }, {
    key: "setInterval",
    value: function setInterval(fn, delay) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Symbol("intervalID");
      // 存入队列
      this.queue.set(id, {
        fn: fn,
        type: 1,
        paused: 0,
        elapsed: 0,
        delay: delay
      });
      return id;
    }

    // clearInterval
  }, {
    key: "clearInterval",
    value: function clearInterval(id) {
      return this["delete"](id);
    }

    // 修改指定id的 delay/fn
  }, {
    key: "set",
    value: function set(id) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var item = this.queue.get(id) || {};
      for (var key in config) {
        item[key] = config[key];
      }
      return true;
    }

    // 删除 queue 上的成员
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.queue["delete"](id);
    }

    // 暂停指定id
  }, {
    key: "pause",
    value: function pause(id) {
      id === undefined ? this.pauseAll() : this.queue.get(id).paused = 1;
      return true;
    }

    // 恢复指定id
  }, {
    key: "resume",
    value: function resume(id) {
      return this.play(id);
    }

    // 播放指定id
  }, {
    key: "play",
    value: function play(id) {
      id === undefined ? this.playAll() : this.queue.get(id).paused = 0;
      return true;
    }

    // 清空timer
  }, {
    key: "clean",
    value: function clean() {
      this.queue = new Map();
      return true;
    }

    // 暂停全部 id
  }, {
    key: "pauseAll",
    value: function pauseAll() {
      this.queue.forEach(function (item) {
        return item.paused = 1;
      });
      return true;
    }

    // 播放全部 id
  }, {
    key: "playAll",
    value: function playAll() {
      this.queue.forEach(function (item) {
        return item.paused = 0;
      });
      return true;
    }

    // tick
  }, {
    key: "tick",
    value: function tick(delta) {
      this.paused || this.updateQueue(delta);
    }

    // 更新 map 队列
  }, {
    key: "updateQueue",
    value: function updateQueue(delta) {
      var _this = this;
      this.queue.forEach(function (item, id) {
        if (item.paused === 1) return;
        item.elapsed += delta;
        if (item.elapsed >= item.delay) {
          item.fn();
          item.type === 0 ? _this["delete"](id) : item.elapsed = 0;
        }
      });
    }

    // 状态更新
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;
      // 第一次调用 update 时主动停用原生接口
      this.useRAF = false;

      // 下面是真正的 update
      this.update = function (delta) {
        if (_this2.usingRAF) return;
        _this2.tick(delta);
      };
    }
  }]);
  return Timer;
}();
var AnimationFrame = /*#__PURE__*/function () {
  function AnimationFrame() {
    _classCallCheck(this, AnimationFrame);
    this.time = 0;
    this.auto = this.auto.bind(this);
  }
  _createClass(AnimationFrame, [{
    key: "auto",
    value: function auto(elapsed) {
      timer.tick(elapsed - this.time);
      this.time = elapsed;
      this.id = requestAnimationFrame(this.auto);
    }
  }, {
    key: "enable",
    value: function enable() {
      timer.paused = false;
      this.id = requestAnimationFrame(this.auto);
    }
  }, {
    key: "disable",
    value: function disable() {
      cancelAnimationFrame(this.id);
    }
  }]);
  return AnimationFrame;
}(); // 原生RAF
Timer.RAF = new AnimationFrame();

// 对外接口
var timer = new Timer();

// 默认使用原生 RAF
timer.useRAF = true;
// 导出timer
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/script/lib/utils.es6":
/*!**********************************!*\
  !*** ./src/script/lib/utils.es6 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _this = this;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
	@ PIXI 扩展
*/
// DisplayObject 的原型
var proto = PIXI.DisplayObject.prototype;
proto.set = function (arg) {
  for (var key in arg) {
    this[key] = arg[key];
  }
};
proto.offsetX = proto.offsetY = 0;
Object.defineProperties(proto, {
  scaleX: {
    set: function set(value) {
      if (this.scale.x !== value) {
        this.scale.x = value;
      }
    },
    get: function get() {
      return this.scale.x;
    }
  },
  scaleY: {
    set: function set(value) {
      if (this.scale.y !== value) {
        this.scale.y = value;
      }
    },
    get: function get() {
      return this.scale.y;
    }
  },
  skewX: {
    set: function set(value) {
      if (this.skew.x !== value) {
        this.skew.x = value;
      }
    },
    get: function get() {
      return this.skew.x;
    }
  },
  skewY: {
    set: function set(value) {
      if (this.skew.y !== value) {
        this.skew.y = value;
      }
    },
    get: function get() {
      return this.skew.y;
    }
  },
  rotate: {
    set: function set(value) {
      if (this.rotation !== value) {
        this.rotation = value;
      }
    },
    get: function get() {
      return this.rotation;
    }
  },
  pivotX: {
    set: function set(value) {
      this.pivot.x = value;
    },
    get: function get() {
      return this.pivot.x;
    }
  },
  pivotY: {
    set: function set(value) {
      this.pivot.y = value;
    },
    get: function get() {
      return this.pivot.y;
    }
  },
  anchorX: {
    set: function set(value) {
      this.anchor.x = value;
    },
    get: function get() {
      return this.anchor.x;
    }
  },
  anchorY: {
    set: function set(value) {
      this.anchor.y = value;
    },
    get: function get() {
      return this.anchor.y;
    }
  },
  origin: {
    get: function get() {
      return [this.pivot.x, this.pivot.y];
    },
    set: function set(coord) {
      // rotation/skew/scale 会影响 pivot 定位
      var parent = this.parent || this._tempDisplayObjectParent;
      // 未形变的左上角坐标
      var pointA = {
        x: this._left,
        y: this._top
      };
      // 形变后的中心坐标
      var pointB = parent.toLocal(new PIXI.Point(coord[0], coord[1]), this);

      // 盒子偏移
      this.boxOffsetX = pointB.x - (pointA.x + coord[0]);
      this.boxOffsetY = pointB.y - (pointA.y + coord[1]);
      // 几何中心的偏移量
      this.offsetX = pointB.x - pointA.x - this.boxOffsetX;
      this.offsetY = pointB.y - pointA.y - this.boxOffsetY;
      this.x = this._left + this.offsetX;
      this.y = this._top + this.offsetY;
      this.pivot.set(coord[0], coord[1]);
    }
  },
  left: {
    get: function get() {
      return this._left;
    },
    set: function set(value) {
      this._left = value;
      this.x = value + this.offsetX;
    }
  },
  right: {
    get: function get() {
      return this._right;
    },
    set: function set(value) {
      if (value === undefined) return;
      this._right = value;
      // 由 left 实现 
      this.left = this.parent.width - this.width - value;
    }
  },
  top: {
    get: function get() {
      return this._top;
    },
    set: function set(value) {
      this._top = value;
      this.y = value + this.offsetY;
    }
  },
  bottom: {
    get: function get() {
      return this._bottom;
    },
    set: function set(value) {
      if (value === undefined) return;
      this._bottom = value;
      // 由 top 实现
      this.top = this.parent.height - this.height - value;
    }
  },
  // 运动时间
  time: {
    set: function set(t) {
      var elapsed = t - this._t || t;
      this._t = t;
      var velocityX = this.velocityX,
        velocityY = this.velocityY,
        accelerationX = this.accelerationX,
        accelerationY = this.accelerationY;
      // 当前速度 
      this.velocityX += elapsed * accelerationX;
      this.velocityY += elapsed * accelerationY;
      // 当前位置
      this.x += (this.velocityX + velocityX) * elapsed / 2;
      this.y += (this.velocityY + velocityY) * elapsed / 2;
    },
    get: function get() {
      return this._t;
    }
  },
  index: {
    set: function set(value) {
      if (this._index !== value) {
        this._index = value;
        this.parent.setChildIndex(this, value);
      }
    },
    get: function get() {
      return _this._index;
    }
  }
});

// 为原型添加速度与加速度属性等
Object.assign(proto, {
  velocityX: 0,
  velocityY: 0,
  accelerationX: 0,
  accelerationY: 0,
  _top: 0,
  _left: 0
});

// 监听 addChild
var _addChild = PIXI.Container.prototype.addChild;
PIXI.Container.prototype.addChild = function () {
  var len = arguments.length;
  if (len === 0) return;
  _addChild.apply(this, arguments);
  // 更新 right & bottom
  for (var i = 0; i < len; ++i) {
    var child = arguments[i];
    child.right = child._right;
    child.bottom = child._bottom;
  }
};
var _addChildAt = PIXI.Container.prototype.addChildAt;
PIXI.Container.prototype.addChildAt = function (child, index) {
  _addChildAt.call(this, child, index);
  // 更新 right & bottom
  child.right = child._right;
  child.bottom = child._bottom;
};

// 获取不带描边的boudary
{
  var dirty = Symbol("dirty");
  var getContentBox = function getContentBox() {
    if (this[dirty] == this.dirty) return;
    this[dirty] = this.dirty; // 表示已经更新
    var cp = this.clone();
    var graphicsData = cp.graphicsData;
    var _iterator = _createForOfIteratorHelper(graphicsData),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var graphics = _step.value;
        graphics.lineWidth = 0;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this._cwidth = cp.width;
    this._cheight = cp.height;
  };
  Object.defineProperties(PIXI.Graphics.prototype, {
    "_cwidth": {
      writable: true,
      value: 0
    },
    "_cheight": {
      writable: true,
      value: 0
    },
    "cwidth": {
      get: function get() {
        getContentBox.call(this);
        return this._cwidth;
      }
    },
    "cheight": {
      get: function get() {
        getContentBox.call(this);
        return this._cheight;
      }
    }
  });
}

// 动态生成 DisplayObject 缓存
PIXI.DisplayObject.prototype.generateCanvasTexture = function (renderer) {
  var rect = this.getBounds();
  var cache = PIXI.RenderTexture.create(rect.width, rect.height);
  this.setTransform();
  renderer.render(this, cache);
  return cache;
};

// 封装微信手Q的 visibilitychange 事件
document.addEventListener("qbrowserVisibilityChange", function (e) {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("visibilitychange", false, false);
  evt.hidden = e.hidden;
  document.dispatchEvent(evt);
}, true);
document.addEventListener("visibilitychange", function (e) {
  e.hidden = e.hidden === undefined ? document.hidden : e.hidden;
}, true);

/***/ }),

/***/ "@gsap/tween-max":
/*!***************************!*\
  !*** external "TweenMax" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TweenMax;

/***/ }),

/***/ "@pixi":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),

/***/ "@pixi-extra-filters":
/*!***********************************!*\
  !*** external ["PIXI","filters"] ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI["filters"];

/***/ })

/******/ });
//# sourceMappingURL=index-f6b6c5.js.map