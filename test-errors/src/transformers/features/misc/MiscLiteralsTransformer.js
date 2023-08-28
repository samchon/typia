"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscLiteralsTransformer = void 0;
const MiscLiteralsProgrammer_1 = require("../../../programmers/misc/MiscLiteralsProgrammer");
const TransformerError_1 = require("../../TransformerError");
var MiscLiteralsTransformer;
(function (MiscLiteralsTransformer) {
    MiscLiteralsTransformer.transform = (project) => (expression) => {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0])
            throw new TransformerError_1.TransformerError({
                code: "typia.misc.literals",
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = expression.typeArguments[0];
        const type = project.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.misc.literals",
                message: "non-specified generic argument.",
            });
        // DO TRANSFORM
        return MiscLiteralsProgrammer_1.MiscLiteralsProgrammer.write(project)(type);
    };
})(MiscLiteralsTransformer || (exports.MiscLiteralsTransformer = MiscLiteralsTransformer = {}));
