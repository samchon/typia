import { ProtobufValidateEncodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufValidateEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.validateEncode",
      write: ProtobufValidateEncodeProgrammer.write,
    });
}
