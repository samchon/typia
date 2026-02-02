import ts from "typescript";

import { ProtobufMessageProgrammer } from "../../../programmers/protobuf/ProtobufMessageProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace ProtobufMessageTransformer {
  export const transform = (
    props: Pick<ITransformProps, "context" | "expression">,
  ): ts.Expression => {
    // CHECK GENERIC ARGUMENT EXISTENCE
    if (!props.expression.typeArguments || !props.expression.typeArguments[0])
      throw new TransformerError({
        code: "typia.protobuf.message",
        message: "generic argument is not specified.",
      });

    // GET TYPE INFO
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(
      props.expression.typeArguments[0],
    );
    if (type.isTypeParameter())
      throw new TransformerError({
        code: "tyipa.protobuf.message",
        message: "non-specified generic argument.",
      });

    // DO TRANSFORM
    return ProtobufMessageProgrammer.write({
      context: props.context,
      type,
    });
  };
}
