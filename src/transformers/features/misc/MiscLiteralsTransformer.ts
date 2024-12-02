import ts from "typescript";

import { MiscLiteralsProgrammer } from "../../../programmers/misc/MiscLiteralsProgrammer";

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
