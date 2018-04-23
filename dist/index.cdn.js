'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));
    }

    _createClass(Component, [{
        key: 'getStateMods',
        value: function getStateMods() {
            var mods = {};

            if (this.state && this.state.mods) {
                mods = this.state.mods;
            }

            return mods;
        }
    }, {
        key: 'getModDeps',
        value: function getModDeps() {
            var mods = this.getStateMods();

            var modKeyValues = Object.entries(mods);

            return modKeyValues.filter(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    val = _ref2[1];

                return val;
            }).map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    key = _ref4[0],
                    val = _ref4[1];

                return key;
            });
        }
    }, {
        key: 'toFirstUpperCase',
        value: function toFirstUpperCase(str) {
            return str[0].toUpperCase() + str.substring(1, str.length);
        }
    }, {
        key: 'genClassName',
        value: function genClassName() {
            var _props = this.props,
                clx = _props.clx,
                parent = _props.parent,
                props = this.props,
                getModDeps = this.getModDeps,
                name = this.constructor.name,
                toFirstUpperCase = this.toFirstUpperCase;


            var mods = this.getStateMods();

            var modDeps = getModDeps.call(this);

            var componentMods = _extends({}, props, mods);

            var modsKeysSet = [].concat(_toConsumableArray(modDeps)).filter(function (dep) {
                return componentMods.hasOwnProperty(dep);
            });

            var className = modsKeysSet.reduce(function (str, dep) {
                var mod = {
                    key: toFirstUpperCase(dep),
                    val: toFirstUpperCase(componentMods[dep])
                };

                if (mod.val === true) {
                    return str + ' ' + name + '_' + mod.key;
                } else if (mod.val) {
                    return str + ' ' + name + '_' + mod.key + '_' + mod.val;
                }

                return str;
            }, name);

            className += parent ? ' ' + parent + '-' + name : '';
            className += clx ? ' ' + clx : '';

            return className;
        }
    }]);

    return Component;
}(React.Component);

var Bemponent = {
    Component: Component
};