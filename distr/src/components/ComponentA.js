"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DataSource;
function registerComponentForEvent(WrappedComponent, callback) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.handleChange = _this.handleChange.bind(_this);
            _this.state = {
                data: callback(DataSource, props)
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            // ... that takes care of the subscription... 
            DataSource.addChangeListener(this.handleChange);
        };
        class_1.prototype.componentWillUnmount = function () {
            DataSource.removeChangeListener(this.handleChange);
        };
        class_1.prototype.handleChange = function () {
            this.setState({
                data: callback(DataSource, this.props)
            });
        };
        class_1.prototype.render = function () {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return React.createElement(WrappedComponent, __assign({ data: this.state.data }, this.props));
        };
        return class_1;
    }(React.Component));
}
function mapStateToProps(state) {
    return {};
}
var componentName = /** @class */ (function (_super) {
    __extends(componentName, _super);
    function componentName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    componentName.prototype.render = function () {
        return (React.createElement("div", null, "Hello Ya "));
    };
    return componentName;
}(React.Component));
exports.default = componentName;
//# sourceMappingURL=ComponentA.js.map