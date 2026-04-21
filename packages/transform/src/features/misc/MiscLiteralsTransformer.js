"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscLiteralsTransformer = void 0;
const core_1 = require("@typia/core");
const TransformerError_1 = require("../../TransformerError");
var MiscLiteralsTransformer;
(function (MiscLiteralsTransformer) {
    MiscLiteralsTransformer.transform = (props) => {
        var _a;
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a[0]))
            throw new TransformerError_1.TransformerError({
                code: "typia.misc.literals",
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = props.expression.typeArguments[0];
        const type = props.context.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.misc.literals",
                message: "non-specified generic argument.",
            });
        // DO TRANSFORM
        return core_1.MiscLiteralsProgrammer.write({
            context: props.context,
            type,
        });
    };
})(MiscLiteralsTransformer || (exports.MiscLiteralsTransformer = MiscLiteralsTransformer = {}));
//# sourceMappingURL=MiscLiteralsTransformer.js.map