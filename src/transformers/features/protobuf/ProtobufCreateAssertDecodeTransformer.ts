import { ProtobufAssertDecodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertDecodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateAssertDecodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createAssertDecode",
      write: ProtobufAssertDecodeProgrammer.write,
    });
}
