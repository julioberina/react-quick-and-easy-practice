webpackJsonp([1],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(99);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Julio',
      health: 100,
      level: 10
    };

    _this.clickedGirl = _this.clickedGirl.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'clickedGirl',
    value: function clickedGirl() {
      this.setState({
        health: this.state.health === "DEAD!" || this.state.health === 10 ? "DEAD!" : this.state.health - 10
      }, function () {
        if (this.state.health !== "DEAD!") console.log("Hey I clicked the girl. Her health is now " + this.state.health);else console.log("The girl is already dead!");
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'parent' },
        _react2.default.createElement(Header, null),
        _react2.default.createElement(
          'section',
          { className: this.state.health === "DEAD!" || this.state.health < 55 ? 'danger-red' : 'blue-bg' },
          _react2.default.createElement(
            'div',
            { className: 'user-info' },
            _react2.default.createElement(
              'h3',
              null,
              'Name: ',
              this.state.name
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Health: ',
              this.state.health
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Level: ',
              this.state.level
            )
          ),
          _react2.default.createElement(GirlImage, { clickEvt: this.clickedGirl })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var GirlImage = function (_Component2) {
  _inherits(GirlImage, _Component2);

  function GirlImage() {
    _classCallCheck(this, GirlImage);

    var _this2 = _possibleConstructorReturn(this, (GirlImage.__proto__ || Object.getPrototypeOf(GirlImage)).call(this));

    _this2.state = {};
    return _this2;
  }

  _createClass(GirlImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'girlImageComp' },
        _react2.default.createElement('img', { src: '/img/bape.png', alt: 'girl with bape',
          onClick: this.props.clickEvt })
      );
    }
  }]);

  return GirlImage;
}(_react.Component);

var Header = function Header() {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Home'
      ),
      _react2.default.createElement(
        'li',
        null,
        'About'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Contact'
      )
    )
  );
};

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[233]);