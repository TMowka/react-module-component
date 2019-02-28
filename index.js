"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactModuleComponent = function reactModuleComponent(_ref) {
  var out = _ref.out;
  return _react.default.createElement("div", null, "React module component outProps: ", out);
};

var _default = reactModuleComponent;
exports.default = _default;
