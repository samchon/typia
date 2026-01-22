import { ProtobufDecodeProgrammer } from "../../../programmers/protobuf/ProtobufDecodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createDecode",
      write: ProtobufDecodeProgrammer.write,
    });
}
