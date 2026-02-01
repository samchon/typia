import { ProtobufAssertEncodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertEncodeProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateAssertEncodeTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "protobuf.createAssertEncode",
      write: ProtobufAssertEncodeProgrammer.write,
    });
}
