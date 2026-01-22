import { ProtobufValidateDecodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateDecodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateValidateDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createValidateDecode",
      write: ProtobufValidateDecodeProgrammer.write,
    });
}
