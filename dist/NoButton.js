"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NoButton = function NoButton() {
  return parse( /*#__PURE__*/_react["default"].createElement("div", {
    className: "button"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "no"
  }, "No")));
};
var _default = exports["default"] = NoButton;