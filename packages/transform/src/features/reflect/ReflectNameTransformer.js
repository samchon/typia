"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectNameTransformer = void 0;
const core_1 = require("@typia/core");
const typescript_1 = __importDefault(require("typescript"));
const TransformerError_1 = require("../../TransformerError");
var ReflectNameTransformer;
(function (ReflectNameTransformer) {
    ReflectNameTransformer.transform = (props) => {
        var _a;
        if (!((_a = props.expression.typeArguments) === null || _a === void 0 ? void 0 : _a.length))
            throw new TransformerError_1.TransformerError({
                code: "typia.reflect.metadata",
                message: "no generic argument.",
            });
        const top = props.expression.typeArguments[0];
        const regular = (() => {
            // CHECK SECOND ARGUMENT EXISTENCE
            const second = props.expression.typeArguments[1];
            if (second === undefined)
                return false;
            // GET BOOLEAN VALUE
            const value = getMetadata({
                context: props.context,
                node: second,
            });
            return value.size() === 1 &&
                value.constants.length === 1 &&
                value.constants[0].type === "boolean" &&
                value.constants[0].values.length === 1
                ? value.constants[0].values[0].value
                : false;
        })();
        // RETURNS NAME
        return typescript_1.default.factory.createStringLiteral(regular
            ? getMetadata({
                context: props.context,
                node: top,
            }).getName()
            : top.getFullText());
    };
})(ReflectNameTransformer || (exports.ReflectNameTransformer = ReflectNameTransformer = {}));
const getMetadata = (props) => {
    const type = props.context.checker.getTypeFromTypeNode(props.node);
    const collection = new core_1.MetadataCollection({
        replace: core_1.MetadataCollection.replace,
    });
    const result = core_1.MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
            absorb: false,
            constant: true,
            escape: false,
        },
        components: collection,
        type,
    });
    if (result.success === false)
        throw TransformerError_1.TransformerError.from({
            code: "typia.reflect.name",
            errors: result.errors,
        });
    return result.data;
};
//# sourceMappingURL=ReflectNameTransformer.js.map