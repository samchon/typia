"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectMetadataTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var ReflectMetadataTransformer;
(function (ReflectMetadataTransformer) {
    ReflectMetadataTransformer.transform = (props) => {
        var _a;
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.reflect.metadata",
                message: "no generic argument.",
            });
        // VALIDATE TUPLE ARGUMENTS
        const top = props.expression.typeArguments[0];
        if (!typescript_1.default.isTupleTypeNode(top))
            return props.expression;
        else if (top.elements.some((child) => !typescript_1.default.isTypeNode(child)))
            return props.expression;
        // GET TYPES
        const types = top.elements.map((child) => props.context.checker.getTypeFromTypeNode(child));
        if (types.some((t) => t.isTypeParameter()))
            throw new TransformerError_1.TransformerError({
                code: "typia.reflect.metadata",
                message: "non-specified generic argument(s).",
            });
        // METADATA
        const components = new core_1.MetadataCollection();
        const schemas = types.map((type) => {
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
                    code: "typia.reflect.metadata",
                    errors: result.errors,
                });
            return result.data;
        });
        // CONVERT TO PRIMITIVE TYPE
        const collection = {
            schemas: schemas.map((s) => s.toJSON()),
            components: components.toJSON(),
        };
        return core_1.LiteralFactory.write(collection);
    };
})(ReflectMetadataTransformer || (exports.ReflectMetadataTransformer = ReflectMetadataTransformer = {}));
//# sourceMappingURL=ReflectMetadataTransformer.js.map