"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../TransformerError");
var RandomTransformer;
(function (RandomTransformer) {
    RandomTransformer.transform = (props) => {
        var _a;
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a[0]))
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.modulo.getText()}`,
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = props.expression.typeArguments[0];
        const type = props.context.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${props.modulo.getText()}`,
                message: "non-specified generic argument.",
            });
        return typescript_1.default.factory.createCallExpression(core_1.RandomProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            type,
            name: node.getFullText().trim(),
            init: undefined,
        }), undefined, props.expression.arguments.length
            ? [props.expression.arguments[0]]
            : undefined);
    };
})(RandomTransformer || (exports.RandomTransformer = RandomTransformer = {}));
//# sourceMappingURL=RandomTransformer.js.map