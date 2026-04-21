"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmControllerTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmControllerTransformer;
(function (LlmControllerTransformer) {
    LlmControllerTransformer.transform = (props) => {
        var _a;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.controller",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        if (props.expression.arguments[0] === undefined)
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.controller",
                message: "no identifier name.",
            });
        if (props.expression.arguments[1] === undefined)
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.controller",
                message: "no executor.",
            });
        // GET CONFIG
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "controller",
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
                    code: "typia.llm.controller",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE LLM CONTROLLER
        return core_1.LlmControllerProgrammer.write({
            context: props.context,
            modulo: props.modulo,
            metadata: analyze(false),
            className: top.getFullText().trim(),
            config,
            node: top,
            nameArgument: props.expression.arguments[0],
            executeArgument: props.expression.arguments[1],
            configArgument: props.expression.arguments[2],
        });
    };
})(LlmControllerTransformer || (exports.LlmControllerTransformer = LlmControllerTransformer = {}));
//# sourceMappingURL=LlmControllerTransformer.js.map