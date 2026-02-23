import { MiscLiteralsProgrammer } from "@typia/core";
import ts from "typescript";

<<<<<<< HEAD
import { MiscLiteralsProgrammer } from "@typia/core";

=======
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace MiscLiteralsTransformer {
  export const transform = (
    props: Omit<ITransformProps, "modulo">,
  ): ts.Expression => {
    // CHECK GENERIC ARGUMENT EXISTENCE
    if (!props.expression.typeArguments?.[0])
      throw new TransformerError({
        code: "typia.misc.literals",
        message: "generic argument is not specified.",
      });

    // GET TYPE INFO
    const node: ts.TypeNode = props.expression.typeArguments[0];
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(node);

    if (type.isTypeParameter())
      throw new TransformerError({
        code: "typia.misc.literals",
        message: "non-specified generic argument.",
      });

    // DO TRANSFORM
    return MiscLiteralsProgrammer.write({
      context: props.context,
      type,
    });
  };
}
