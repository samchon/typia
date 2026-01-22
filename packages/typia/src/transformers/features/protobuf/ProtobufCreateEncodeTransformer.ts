import { ProtobufEncodeProgrammer } from "../../../programmers/protobuf/ProtobufEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createEncode",
      write: ProtobufEncodeProgrammer.write,
    });
}
