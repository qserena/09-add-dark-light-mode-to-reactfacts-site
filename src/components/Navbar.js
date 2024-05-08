"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_icon_small_png_1 = __importDefault(require("../images/react-icon-small.png"));
function Navbar(props) {
    return ((0, jsx_runtime_1.jsxs)("nav", { className: props.darkMode ? 'dark' : '', children: [(0, jsx_runtime_1.jsx)("img", { className: "nav--logo_icon", alt: "Small React logotype", src: react_icon_small_png_1.default }), (0, jsx_runtime_1.jsx)("h3", { className: "nav--logo_text", children: "ReactFacts" }), (0, jsx_runtime_1.jsxs)("div", { className: "toggler", children: [(0, jsx_runtime_1.jsx)("p", { className: "toggler--light", children: "Light" }), (0, jsx_runtime_1.jsx)("div", { className: "toggler--slider", onClick: props.toggleDarkMode, children: (0, jsx_runtime_1.jsx)("div", { className: "toggler--slider--circle" }) }), (0, jsx_runtime_1.jsx)("p", { className: "toggler--dark", children: "Dark" })] })] }));
}
exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.js.map