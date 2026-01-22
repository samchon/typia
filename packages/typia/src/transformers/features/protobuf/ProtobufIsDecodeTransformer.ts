import { ProtobufIsDecodeProgrammer } from "../../../programmers/protobuf/ProtobufIsDecodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufIsDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.isDecode",
      write: ProtobufIsDecodeProgrammer.write,
    });
}
