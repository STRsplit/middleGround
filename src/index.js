"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMiddle = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var setMiddle = function setMiddle(string, element) {
  var finalizeString = function finalizeString(string) {
    if (string.props && string.props.children) {
      return finalizeString(string.props.children);
    }

    return string;
  };

  if (!element) {
    return string;
  }

  var finalString = finalizeString(string);

  var _ref = finalString.length % 2 === 0 ? [true, finalString.length / 2 - 1] : [false, Math.floor(finalString.length / 2)],
      _ref2 = _slicedToArray(_ref, 2),
      even = _ref2[0],
      mid = _ref2[1];

  var finalOutput = finalString.split('').reduce(function (result, _char, ind) {
    if (ind === mid) {
      result = even ? [].concat(_toConsumableArray(result), ["\xA0", element]) : [].concat(_toConsumableArray(result), [element]);
    } else {
      result = [].concat(_toConsumableArray(result), ["\xA0"]);
    }

    return result;
  }, []);
  return finalOutput;
};

exports.setMiddle = setMiddle;