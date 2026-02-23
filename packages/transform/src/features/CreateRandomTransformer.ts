import { RandomProgrammer } from "@typia/core";
import ts from "typescript";

<<<<<<< HEAD
import { RandomProgrammer } from "@typia/core";

=======
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
