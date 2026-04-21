"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectSchemaTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var ReflectSchemaTransformer;
(function (ReflectSchemaTransformer) {
    ReflectSchemaTransformer.transform = (props) => {
        var _a;
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.reflect.schema",
                message: "no generic argument.",
            });
        // VALIDATE ARGUMENT
        const top = props.expression.typeArguments[0];
        if (top === undefined || typescript_1.default.isTypeNode(top) === false)
            return props.expression;
        // GET TYPE
        const type = props.context.checker.getTypeFromTypeNode(top);
        if (type.isTypeParameter())
            throw new TransformerError_1.TransformerError({
                code: "typia.reflect.schema",
                message: "non-specified generic argument.",
            });
        // METADATA
        const components = new core_1.MetadataCollection();
        const result = core_1.MetadataFactory.analyze({
            checker: props.context.checker,
            transformer: props.context.transformer,
            options: {
                escape: true,
                constant: true,
                absorb: true,
                functional: true,
            },
            components: components,
            type,
        });
        if (result.success === false)
            throw TransformerError_1.TransformerError.from({
                code: "typia.reflect.schema",
                errors: result.errors,
            });
        const schema = result.data;
        // CONVERT TO PRIMITIVE TYPE
        const unit = {
            schema: schema.toJSON(),
            components: components.toJSON(),
        };
        return core_1.LiteralFactory.write(unit);
    };
})(ReflectSchemaTransformer || (exports.ReflectSchemaTransformer = ReflectSchemaTransformer = {}));
//# sourceMappingURL=ReflectSchemaTransformer.js.map