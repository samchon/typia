"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
var StatementFactory;
(function (StatementFactory) {
    StatementFactory.mut = (name, initializer) => typescript_1.default.factory.createVariableStatement(undefined, typescript_1.default.factory.createVariableDeclarationList([
        typescript_1.default.factory.createVariableDeclaration(name, undefined, undefined, initializer),
    ], typescript_1.default.NodeFlags.Let));
    StatementFactory.constant = (name, initializer) => typescript_1.default.factory.createVariableStatement(undefined, typescript_1.default.factory.createVariableDeclarationList([
        typescript_1.default.factory.createVariableDeclaration(name, undefined, undefined, initializer),
    ], typescript_1.default.NodeFlags.Const));
    StatementFactory.entry = (key) => (value) => typescript_1.default.factory.createVariableDeclarationList([
        typescript_1.default.factory.createVariableDeclaration(typescript_1.default.factory.createArrayBindingPattern([
            typescript_1.default.factory.createBindingElement(undefined, undefined, typescript_1.default.factory.createIdentifier(key), undefined),
            typescript_1.default.factory.createBindingElement(undefined, undefined, typescript_1.default.factory.createIdentifier(value), undefined),
        ]), undefined, undefined, undefined),
    ], typescript_1.default.NodeFlags.Const);
    StatementFactory.transpile = (script) => typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createIdentifier(typescript_1.default.transpile(script)));
    StatementFactory.block = (expression) => typescript_1.default.factory.createBlock([typescript_1.default.factory.createExpressionStatement(expression)], true);
})(StatementFactory || (exports.StatementFactory = StatementFactory = {}));
