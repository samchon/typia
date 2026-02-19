import { ProtobufValidateDecodeProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufValidateDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.validateDecode",
      write: ProtobufValidateDecodeProgrammer.write,
    });
}
