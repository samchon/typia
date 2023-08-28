"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTransformer = void 0;
const path_1 = __importDefault(require("path"));
const typescript_1 = __importDefault(require("typescript"));
var ImportTransformer;
(function (ImportTransformer) {
    ImportTransformer.transform = (from) => (to) => (context) => (file) => transform_file(from)(to)(context)(file);
    const transform_file = (top) => (to) => (context) => (file) => {
        if (file.isDeclarationFile)
            return file;
        const from = get_directory_path(path_1.default.resolve(file.getSourceFile().fileName));
        to = from.replace(top, to);
        return typescript_1.default.visitEachChild(file, (node) => transform_node(top)(from)(to)(node), context);
    };
    const transform_node = (top) => (from) => (to) => (node) => {
        if (!typescript_1.default.isImportDeclaration(node) ||
            !typescript_1.default.isStringLiteral(node.moduleSpecifier))
            return node;
        const text = node.moduleSpecifier.text;
        if (text[0] !== ".")
            return node;
        const location = path_1.default.resolve(from, text);
        if (location.indexOf(top) === 0)
            return node;
        const replaced = (() => {
            const simple = path_1.default
                .relative(to, location)
                .split(path_1.default.sep)
                .join("/");
            return simple[0] === "." ? simple : `./${simple}`;
        })();
        return typescript_1.default.factory.createImportDeclaration(undefined, node.importClause, typescript_1.default.factory.createStringLiteral(replaced), node.assertClause);
    };
})(ImportTransformer || (exports.ImportTransformer = ImportTransformer = {}));
const get_directory_path = (file) => {
    const splitted = path_1.default.resolve(file).split(path_1.default.sep);
    splitted.pop();
    return path_1.default.resolve(splitted.join(path_1.default.sep));
};
