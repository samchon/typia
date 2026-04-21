"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmApplicationTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmApplicationTransformer;
(function (LlmApplicationTransformer) {
    LlmApplicationTransformer.transform = (props) => {
        var _a, _b;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.application",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET CONFIG
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "application",
            node: props.expression.typeArguments[1],
        });
        const type = props.context.checker.getTypeFromTypeNode(top);
        // VALIDATE TYPE
        const analyze = (validate) => {
            const result = core_1.MetadataFactory.analyze({
                checker: props.context.checker,
                transformer: props.context.transformer,
                options: {
                    absorb: validate,
                    escape: true,
                    constant: true,
                    functional: true,
                    validate: validate === true
                        ? (next) => core_1.LlmApplicationProgrammer.validate({
                            config,
                            metadata: next.metadata,
                            explore: next.explore,
                            top: next.top,
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
                    code: "typia.llm.application",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE LLM APPLICATION
        return core_1.LlmApplicationProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            metadata: analyze(false),
            name: top.getFullText().trim(),
            config,
            configArgument: ((_b = props.expression.arguments) === null || _b === void 0 ? void 0 : _b[0]) !== undefined
                ? props.expression.arguments[0]
                : undefined,
        });
    };
})(LlmApplicationTransformer || (exports.LlmApplicationTransformer = LlmApplicationTransformer = {}));
//# sourceMappingURL=LlmApplicationTransformer.js.map