"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const RandomProgrammer_1 = require("../../programmers/RandomProgrammer");
const TransformerError_1 = require("../TransformerError");
var RandomTransformer;
(function (RandomTransformer) {
    RandomTransformer.transform = (project) => (modulo) => (expression) => {
        // CHECK GENERIC ARGUMENT EXISTENCE
        if (!expression.typeArguments?.[0])
            throw new TransformerError_1.TransformerError({
                code: `typia.${modulo.getText()}`,
                message: "generic argument is not specified.",
            });
        // GET TYPE INFO
        const node = expression.typeArguments[0];
        const type = project.checker.getTypeFromTypeNode(node);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: `typia.${modulo.getText()}`,
                message: "non-specified generic argument.",
            });
        // DO TRANSFORM
        return typescript_1.default.factory.createCallExpression(RandomProgrammer_1.RandomProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)()(type, node.getFullText().trim()), undefined, expression.arguments.length
            ? [expression.arguments[0]]
            : undefined);
    };
})(RandomTransformer || (exports.RandomTransformer = RandomTransformer = {}));
