import { ITypiaContext } from "@typia/core";
import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";

/**
 * TypeScript AST node transformer.
 *
 * Delegates call expression nodes to {@link CallExpressionTransformer} for
 * potential `typia.*` function transformation. Non-call nodes pass through.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace NodeTransformer {
  export const transform = (props: {
    context: ITypiaContext;
    node: ts.Node;
  }): ts.Node | null =>
    ts.isCallExpression(props.node) && props.node.parent
      ? CallExpressionTransformer.transform({
          context: props.context,
          expression: props.node,
        })
      : props.node;
}
