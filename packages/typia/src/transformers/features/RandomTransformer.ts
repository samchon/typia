import ts from "typescript";

import { RandomProgrammer } from "../../programmers/RandomProgrammer";

import { ITransformProps } from "../ITransformProps";
import { TransformerError } from "../TransformerError";

export namespace RandomTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // CHECK GENERIC ARGUMENT EXISTENCE
    if (!props.expression.typeArguments?.[0])
      throw new TransformerError({
        code: `typia.${props.modulo.getText()}`,
        message: "generic argument is not specified.",
      });

    // GET TYPE INFO
    const node: ts.TypeNode = props.expression.typeArguments[0];
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(node);

    if (type.isTypeParameter())
      throw new TransformerError({
        code: `typia.${props.modulo.getText()}`,
        message: "non-specified generic argument.",
      });

    return ts.factory.createCallExpression(
      RandomProgrammer.write({
        context: props.context,
        modulo: props.modulo,
        type,
        name: node.getFullText().trim(),
        init: undefined,
      }),
      undefined,
      props.expression.arguments.length
        ? [props.expression.arguments[0]!]
        : undefined,
    );
  };
}
