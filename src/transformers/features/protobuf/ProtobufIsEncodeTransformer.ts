import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufIsEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.isEncode",
      write: ProtobufIsEncodeProgrammer.write,
    });
}
