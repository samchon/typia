"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmSchemaTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var LlmSchemaTransformer;
(function (LlmSchemaTransformer) {
    LlmSchemaTransformer.transform = (props) => {
        var _a, _b;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.llm.schema",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPE
        const config = core_1.LlmMetadataFactory.getConfig({
            context: props.context,
            method: "schema",
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
                    constant: true,
                    escape: true,
                    validate: validate === true
                        ? (next) => core_1.LlmSchemaProgrammer.validate({
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
                    code: "typia.llm.schema",
                    errors: result.errors,
                });
            return result.data;
        };
        analyze(true);
        // GENERATE LLM SCHEMA
        const expr = core_1.LlmSchemaProgrammer.write({
            context: props.context,
            metadata: analyze(false),
            config,
        });
        // If user provided $defs argument and expression is a function, call it with $defs
        if (((_b = props.expression.arguments) === null || _b === void 0 ? void 0 : _b[0]) !== undefined &&
            typescript_1.default.isArrowFunction(expr)) {
            return typescript_1.default.factory.createCallExpression(expr, undefined, [
                props.expression.arguments[0],
            ]);
        }
        return expr;
    };
})(LlmSchemaTransformer || (exports.LlmSchemaTransformer = LlmSchemaTransformer = {}));
//# sourceMappingURL=LlmSchemaTransformer.js.map