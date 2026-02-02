import { ProtobufDecodeProgrammer } from "../../../programmers/protobuf/ProtobufDecodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.decode",
      write: ProtobufDecodeProgrammer.write,
    });
}
