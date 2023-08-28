"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRandomTransformer = void 0;
const RandomProgrammer_1 = require("../../programmers/RandomProgrammer");
const TransformerError_1 = require("../TransformerError");
var CreateRandomTransformer;
(function (CreateRandomTransformer) {
    CreateRandomTransformer.transform = (project) => (modulo) => (expression) => {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0])
            throw new TransformerError_1.TransformerError({
                code: "typia.createRandom",
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = expression.typeArguments[0];
        const type = project.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.createRandom",
                message: "non-specified generic argument.",
            });
        // DO TRANSFORM
        return RandomProgrammer_1.RandomProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(expression.arguments?.[0])(type, node.getFullText().trim());
    };
})(CreateRandomTransformer || (exports.CreateRandomTransformer = CreateRandomTransformer = {}));
