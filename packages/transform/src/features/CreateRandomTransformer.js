"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRandomTransformer = void 0;
const core_1 = require("@typia/core");
const TransformerError_1 = require("../TransformerError");
var CreateRandomTransformer;
(function (CreateRandomTransformer) {
    CreateRandomTransformer.transform = (props) => {
        var _a, _b;
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a[0]))
            throw new TransformerError_1.TransformerError({
                code: "typia.createRandom",
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = props.expression.typeArguments[0];
        const type = props.context.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.createRandom",
                message: "non-specified generic argument.",
            });
        // DO TRANSFORM
        return core_1.RandomProgrammer.write({
            context: Object.assign(Object.assign({}, props.context), { options: Object.assign(Object.assign({}, props.context.options), { functional: false, numeric: false }) }),
            modulo: props.modulo,
            type,
            name: node.getFullText().trim(),
            init: (_b = props.expression.arguments) === null || _b === void 0 ? void 0 : _b[0],
        });
    };
})(CreateRandomTransformer || (exports.CreateRandomTransformer = CreateRandomTransformer = {}));
//# sourceMappingURL=CreateRandomTransformer.js.map