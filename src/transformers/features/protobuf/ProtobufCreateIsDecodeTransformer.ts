import { ProtobufIsDecodeProgrammer } from "../../../programmers/protobuf/ProtobufIsDecodeProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateIsDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createIsDecode",
      write: ProtobufIsDecodeProgrammer.write,
    });
}
