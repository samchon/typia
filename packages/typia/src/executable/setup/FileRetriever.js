"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRetriever = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
var FileRetriever;
(function (FileRetriever) {
    FileRetriever.directory = (props) => {
        var _a, _b;
        const location = path_1.default.join(props.location, props.file);
        if (fs_1.default.existsSync(location))
            return props.location;
        else if (((_a = props.depth) !== null && _a !== void 0 ? _a : 0) > 2)
            return null;
        return FileRetriever.directory({
            file: props.file,
            location: path_1.default.join(props.location, ".."),
            depth: ((_b = props.depth) !== null && _b !== void 0 ? _b : 0) + 1,
        });
    };
})(FileRetriever || (exports.FileRetriever = FileRetriever = {}));
//# sourceMappingURL=FileRetriever.js.map