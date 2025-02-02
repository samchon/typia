import { ProtobufDecodeProgrammer } from "../../../programmers/protobuf/ProtobufDecodeProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createDecode",
      write: ProtobufDecodeProgrammer.write,
    });
}
