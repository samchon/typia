import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateIsEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createIsEncode",
      write: ProtobufIsEncodeProgrammer.write,
    });
}
