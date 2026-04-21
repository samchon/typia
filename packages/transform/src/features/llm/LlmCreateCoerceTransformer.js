"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmCreateCoerceTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmCreateCoerceTransformer;
(function (LlmCreateCoerceTransformer) {
    LlmCreateCoerceTransformer.transform = (props) => {
        var _a;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.createCoerce",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPE AND CONFIG
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "createCoerce",
            node: props.expression.typeArguments[1],
        });
        const type = props.context.checker.getTypeFromTypeNode(top);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.createCoerce",
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
                        ? (next) => core_1.LlmCoerceProgrammer.validate({
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
                    code: "typia.llm.createCoerce",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE CODE (factory returns the function directly)
        return core_1.LlmCoerceProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            metadata: analyze(false),
            name: top.getFullText().trim(),
            config,
        });
    };
})(LlmCreateCoerceTransformer || (exports.LlmCreateCoerceTransformer = LlmCreateCoerceTransformer = {}));
//# sourceMappingURL=LlmCreateCoerceTransformer.js.map