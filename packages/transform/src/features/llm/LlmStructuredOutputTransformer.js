"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmStructuredOutputTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmStructuredOutputTransformer;
(function (LlmStructuredOutputTransformer) {
    LlmStructuredOutputTransformer.transform = (props) => {
        var _a;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.structuredOutput",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPE AND CONFIG
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "structuredOutput",
            node: props.expression.typeArguments[1],
        });
        const type = props.context.checker.getTypeFromTypeNode(top);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.structuredOutput",
                message: "non-specified generic argument.",
            });
        // VALIDATE TYPE
        const analyze = (validate) => {
            const result = core_1.MetadataFactory.analyze({
                checker: props.context.checker,
                transformer: props.context.transformer,
                options: {
                    absorb: validate,
                    escape: true,
                    constant: true,
                    validate: validate === true
                        ? (next) => core_1.LlmStructuredOutputProgrammer.validate({
                            config,
                            metadata: next.metadata,
                            explore: next.explore,
                        })
                        : undefined,
                },
                components: new core_1.MetadataCollection({
                    replace: core_1.MetadataCollection.replace,
                }),
                type,
            });
            if (result.success === false)
                throw TransformerError_1.TransformerError.from({
                    code: "typia.llm.structuredOutput",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE CODE
        return core_1.LlmStructuredOutputProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            type,
            metadata: analyze(false),
            config,
            name: top.getFullText().trim(),
        });
    };
})(LlmStructuredOutputTransformer || (exports.LlmStructuredOutputTransformer = LlmStructuredOutputTransformer = {}));
//# sourceMappingURL=LlmStructuredOutputTransformer.js.map