"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const CallExpressionTransformer_1 = require("./CallExpressionTransformer");
var NodeTransformer;
(function (NodeTransformer) {
    NodeTransformer.transform = (project) => (expression) => typescript_1.default.isCallExpression(expression)
        ? CallExpressionTransformer_1.CallExpressionTransformer.transform(project)(expression)
        : expression;
})(NodeTransformer || (exports.NodeTransformer = NodeTransformer = {}));
