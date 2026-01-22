import { ProtobufValidateDecodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateDecodeProgrammer";

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
