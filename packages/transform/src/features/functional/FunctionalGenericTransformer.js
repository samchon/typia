"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalGenericTransformer = void 0;
const core_1 = require("@typia/core");
const TransformerError_1 = require("../../TransformerError");
var FunctionalGenericTransformer;
(function (FunctionalGenericTransformer) {
    FunctionalGenericTransformer.transform = (spec) => (props) => {
        // CHECK PARAMETER
        if (props.expression.arguments.length === 0)
            throw new TransformerError_1.TransformerError({
                code: `typia.functional.${spec.method}`,
                message: `no input value.`,
            });
        // GET TYPE INFO
        const type = props.expression.typeArguments && props.expression.typeArguments[0]
            ? props.context.checker.getTypeFromTypeNode(props.expression.typeArguments[0])
            : props.context.checker.getTypeAtLocation(props.expression.arguments[0]);
        if (core_1.TypeFactory.isFunction(type) === false)
            throw new TransformerError_1.TransformerError({
                code: `typia.functional.${spec.method}`,
                message: `input value is not a function.`,
            });
        return spec.programmer(Object.assign(Object.assign({}, props), { config: spec.config, expression: props.expression.arguments[0], declaration: type.symbol.declarations[0], init: props.expression.arguments[1] }));
    };
})(FunctionalGenericTransformer || (exports.FunctionalGenericTransformer = FunctionalGenericTransformer = {}));
//# sourceMappingURL=FunctionalGenericTransformer.js.map