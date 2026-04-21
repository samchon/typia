"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonApplicationTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var JsonApplicationTransformer;
(function (JsonApplicationTransformer) {
    JsonApplicationTransformer.transform = (props) => {
        var _a;
        // GET GENERIC ARGUMENT
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        if (typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        const version = get_parameter({
            checker: props.context.checker,
            name: "Version",
            is: (str) => str === "3.0" || str === "3.1",
            cast: (str) => str,
            default: () => "3.1",
        })(props.expression.typeArguments[1]);
        // GET TYPE
        const type = props.context.checker.getTypeFromTypeNode(top);
        const collection = new core_1.MetadataCollection({
            replace: core_1.MetadataCollection.replace,
        });
        const result = core_1.MetadataFactory.analyze({
            checker: props.context.checker,
            transformer: props.context.transformer,
            options: {
                escape: true,
                constant: true,
                absorb: false,
                functional: true,
                validate: core_1.JsonApplicationProgrammer.validate,
            },
            components: collection,
            type,
        });
        if (result.success === false)
            throw TransformerError_1.TransformerError.from({
                code: "typia.json.application",
                errors: result.errors,
            });
        // GENERATE JSON APPLICATION
        return core_1.JsonApplicationProgrammer.write({
            context: props.context,
            version,
            metadata: result.data,
        });
    };
    const get_parameter = (props) => (node) => {
        if (!node)
            return props.default();
        // CHECK LITERAL TYPE
        const type = props.checker.getTypeFromTypeNode(node);
        if (!type.isLiteral() &&
            (type.getFlags() & typescript_1.default.TypeFlags.BooleanLiteral) === 0)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: `generic argument "${props.name}" must be constant.`,
            });
        // GET VALUE AND VALIDATE IT
        const value = type.isLiteral()
            ? type.value
            : props.checker.typeToString(type);
        if (typeof value !== "string" || props.is(value) === false)
            throw new TransformerError_1.TransformerError({
                code: "typia.json.application",
                message: `invalid value on generic argument "${props.name}".`,
            });
        return props.cast(value);
    };
})(JsonApplicationTransformer || (exports.JsonApplicationTransformer = JsonApplicationTransformer = {}));
//# sourceMappingURL=JsonApplicationTransformer.js.map