import { ProtobufIsDecodeProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateIsDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createIsDecode",
      write: ProtobufIsDecodeProgrammer.write,
    });
}
