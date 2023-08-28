"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../TransformerError");
var GenericTransformer;
(function (GenericTransformer) {
    GenericTransformer.scalar = (method) => (programmer) => (project) => (modulo) => (expression) => {
        // CHECK PARAMETER
        if (expression.arguments.length !== 1)
            throw new TransformerError_1.TransformerError({
                code: `typia.${method}`,
                message: `no input value.`,
            });
        // GET TYPE INFO
        const [type, node, generic] = expression.typeArguments && expression.typeArguments[0]
            ? [
                project.checker.getTypeFromTypeNode(expression.typeArguments[0]),
                expression.typeArguments[0],
                true,
            ]
            : [
                project.checker.getTypeAtLocation(expression.arguments[0]),
                expression.arguments[0],
                false,
            ];
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${method}`,
                message: `non-specified generic argument.`,
            });
        // DO TRANSFORM
        return typescript_1.default.factory.createCallExpression(programmer(project)(modulo)(type, generic
            ? node.getFullText().trim()
            : name(project.checker)(type)(node)), undefined, [expression.arguments[0]]);
    };
    GenericTransformer.factory = (method) => (programmer) => (project) => (modulo) => (expression) => {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0])
            throw new TransformerError_1.TransformerError({
                code: `typia.${method}`,
                message: `generic argument is not specified.`,
            });
        // GET TYPE INFO
        const node = expression.typeArguments[0];
        const type = project.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${method}`,
                message: `non-specified generic argument.`,
            });
        // DO TRANSFORM
        return programmer(project)(modulo)(type, node.getFullText().trim());
    };
    const name = (checker) => (type) => (node) => checker.typeToString(type, node, typescript_1.default.TypeFormatFlags.NodeBuilderFlagsMask);
})(GenericTransformer || (exports.GenericTransformer = GenericTransformer = {}));
