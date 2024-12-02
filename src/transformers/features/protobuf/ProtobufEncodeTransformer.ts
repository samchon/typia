import { ProtobufEncodeProgrammer } from "../../../programmers/protobuf/ProtobufEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.encode",
      write: ProtobufEncodeProgrammer.write,
    });
}
