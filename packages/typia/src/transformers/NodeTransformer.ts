import { ITypiaContext } from "@typia/core";
import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";

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
