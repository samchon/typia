import { ProtobufValidateEncodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateValidateEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createValidateEncode",
      write: ProtobufValidateEncodeProgrammer.write,
    });
}
