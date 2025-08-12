import ts from "typescript";

import { CallExpressionTransformer } from "./CallExpressionTransformer";
import { DecoratorTransformer } from "./DecoratorTransformer";
import { ITypiaContext } from "./ITypiaContext";

export namespace NodeTransformer {
  export const transform = (props: {
    context: ITypiaContext;
    node: ts.Node;
  }): ts.Node | null => {
    // Handle call expressions
    if (ts.isCallExpression(props.node) && props.node.parent) {
      return CallExpressionTransformer.transform({
        context: props.context,
        expression: props.node,
      });
    }
    
    // Handle method declarations with decorators
    if (ts.isMethodDeclaration(props.node) && (props.node as any).decorators) {
      return DecoratorTransformer.transformMethod({
        context: props.context,
        method: props.node,
      });
    }
    
    return props.node;
  };
}
