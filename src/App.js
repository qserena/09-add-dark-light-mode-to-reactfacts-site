"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Navbar_1 = require("./components/Navbar");
const Main_1 = __importDefault(require("./components/Main"));
function App() {
    const [darkMode, setDarkMode] = (0, react_1.useState)(false);
    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, { darkMode: darkMode, toggleDarkMode: toggleDarkMode }), (0, jsx_runtime_1.jsx)(Main_1.default, { darkMode: darkMode })] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map