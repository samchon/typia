import ts from "typescript";

import { RandomProgrammer } from "../../programmers/RandomProgrammer";

import { ITransformProps } from "../ITransformProps";
import { TransformerError } from "../TransformerError";

export namespace CreateRandomTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // CHECK GENERIC ARGUMENT EXISTENCE
    if (!props.expression.typeArguments?.[0])
      throw new TransformerError({
        code: "typia.createRandom",
        message: "generic argument is not specified.",
      });

    // GET TYPE INFO
    const node: ts.TypeNode = props.expression.typeArguments[0];
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(node);

    if (type.isTypeParameter())
      throw new TransformerError({
        code: "typia.createRandom",
        message: "non-specified generic argument.",
      });

    // DO TRANSFORM
    return RandomProgrammer.write({
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: false,
        },
      },
      modulo: props.modulo,
      type,
      name: node.getFullText().trim(),
      init: props.expression.arguments?.[0],
    });
  };
}
