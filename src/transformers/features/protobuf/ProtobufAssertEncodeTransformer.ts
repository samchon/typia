import { ProtobufAssertEncodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertEncodeProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufAssertEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.assertEncode",
      write: ProtobufAssertEncodeProgrammer.write,
    });
}
