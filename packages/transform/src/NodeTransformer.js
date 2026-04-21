"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTransformer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const CallExpressionTransformer_1 = require("./CallExpressionTransformer");
/**
 * TypeScript AST node transformer.
 *
 * Delegates call expression nodes to {@link CallExpressionTransformer} for
 * potential `typia.*` function transformation. Non-call nodes pass through.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var NodeTransformer;
(function (NodeTransformer) {
    NodeTransformer.transform = (props) => typescript_1.default.isCallExpression(props.node) && props.node.parent
        ? CallExpressionTransformer_1.CallExpressionTransformer.transform({
            context: props.context,
            expression: props.node,
        })
        : props.node;
})(NodeTransformer || (exports.NodeTransformer = NodeTransformer = {}));
//# sourceMappingURL=NodeTransformer.js.map