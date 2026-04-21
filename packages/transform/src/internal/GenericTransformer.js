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
    GenericTransformer.scalar = (props) => {
        // CHECK PARAMETER
        if (props.expression.arguments.length === 0)
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.method}`,
                message: `no input value.`,
            });
        // GET TYPE INFO
        const [type, node, generic] = props.expression.typeArguments && props.expression.typeArguments[0]
            ? [
                props.context.checker.getTypeFromTypeNode(props.expression.typeArguments[0]),
                props.expression.typeArguments[0],
                true,
            ]
            : [
                props.context.checker.getTypeAtLocation(props.expression.arguments[0]),
                props.expression.arguments[0],
                false,
            ];
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.method}`,
                message: `non-specified generic argument.`,
            });
        // DO TRANSFORM
        return typescript_1.default.factory.createCallExpression(props.write({
            context: props.context,
            modulo: props.modulo,
            type,
            name: generic
                ? node.getFullText().trim()
                : getTypeName({
                    checker: props.context.checker,
                    type,
                    node,
                }),
        }), undefined, props.expression.arguments);
    };
    GenericTransformer.factory = (props) => {
        var _a;
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a[0]))
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.method}`,
                message: `generic argument is not specified.`,
            });
        // GET TYPE INFO
        const node = props.expression.typeArguments[0];
        const type = props.context.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.method}`,
                message: `non-specified generic argument.`,
            });
        // DO TRANSFORM
        return props.write({
            context: props.context,
            modulo: props.modulo,
            type,
            name: node.getFullText().trim(),
            init: props.expression.arguments[0],
        });
    };
    const getTypeName = (props) => props.checker.typeToString(props.type, props.node, typescript_1.default.TypeFormatFlags.NodeBuilderFlagsMask);
})(GenericTransformer || (exports.GenericTransformer = GenericTransformer = {}));
//# sourceMappingURL=GenericTransformer.js.map