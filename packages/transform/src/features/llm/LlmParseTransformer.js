"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmParseTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmParseTransformer;
(function (LlmParseTransformer) {
    LlmParseTransformer.transform = (props) => {
        var _a;
        // CHECK PARAMETER
        if (props.expression.arguments.length === 0)
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.parse",
                message: "no input value.",
            });
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.parse",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPE AND CONFIG
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "parse",
            node: props.expression.typeArguments[1],
        });
        const type = props.context.checker.getTypeFromTypeNode(top);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.parse",
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
                        ? (next) => core_1.LlmParseProgrammer.validate({
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
                    code: "typia.llm.parse",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE CODE
        return typescript_1.default.factory.createCallExpression(core_1.LlmParseProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            metadata: analyze(false),
            name: top.getFullText().trim(),
            config,
        }), undefined, props.expression.arguments);
    };
})(LlmParseTransformer || (exports.LlmParseTransformer = LlmParseTransformer = {}));
//# sourceMappingURL=LlmParseTransformer.js.map