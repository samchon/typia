import { ProtobufAssertDecodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertDecodeProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufAssertDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "protobuf.assertDecode",
      write: ProtobufAssertDecodeProgrammer.write,
    });
}
