"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSchemaTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var JsonSchemaTransformer;
(function (JsonSchemaTransformer) {
    JsonSchemaTransformer.transform = (props) => {
        var _a;
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.json.schema",
                message: "no generic argument.",
            });
        //----
        // GET ARGUMENTS
        //----
        // VALIDATE TUPLE ARGUMENTS
        const top = props.expression.typeArguments[0];
        if (top === undefined || typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPES
        const type = props.context.checker.getTypeFromTypeNode(top);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.json.schema",
                message: "non-specified generic argument.",
            });
        // ADDITIONAL PARAMETERS
        const version = getParameter({
            checker: props.context.checker,
            name: "Version",
            is: (str) => str === "3.0" || str === "3.1",
            cast: (str) => str,
            default: () => "3.1",
        })(props.expression.typeArguments[1]);
        //----
        // GENERATORS
        //----
        // METADATA
        const analyze = (validate) => {
            const results = core_1.MetadataFactory.analyze({
                checker: props.context.checker,
                transformer: props.context.transformer,
                options: {
                    absorb: validate,
                    constant: true,
                    escape: true,
                    validate: validate === true ? core_1.JsonSchemasProgrammer.validate : undefined,
                },
                components: new core_1.MetadataCollection({
                    replace: core_1.MetadataCollection.replace,
                }),
                type,
            });
            if (results.success === false)
                throw TransformerError_1.TransformerError.from({
                    code: "typia.json.schema",
                    errors: results.errors,
                });
            return results.data;
        };
        analyze(true);
        // APPLICATION
        return core_1.JsonSchemaProgrammer.write({
            context: props.context,
            version,
            metadata: analyze(false),
        });
    };
    const getParameter = (props) => (node) => {
        if (!node)
            return props.default();
        // CHECK LITERAL TYPE
        const type = props.checker.getTypeFromTypeNode(node);
        if (!type.isLiteral() &&
            (type.getFlags() & typescript_1.default.TypeFlags.BooleanLiteral) === 0)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.schema",
                message: `generic argument "${props.name}" must be constant.`,
            });
        // GET VALUE AND VALIDATE IT
        const value = type.isLiteral()
            ? type.value
            : props.checker.typeToString(type);
        if (typeof value !== "string" || props.is(value) === false)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.schema",
                message: `invalid value on generic argument "${props.name}".`,
            });
        return props.cast(value);
    };
})(JsonSchemaTransformer || (exports.JsonSchemaTransformer = JsonSchemaTransformer = {}));
//# sourceMappingURL=JsonSchemaTransformer.js.map