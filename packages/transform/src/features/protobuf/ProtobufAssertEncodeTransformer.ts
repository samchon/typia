import { ProtobufAssertEncodeProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufAssertEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.assertEncode",
      write: ProtobufAssertEncodeProgrammer.write,
    });
}
