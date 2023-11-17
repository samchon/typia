import { ProtobufAssertDecodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateAssertDecodeTransformer {
  export const transform = GenericTransformer.factory(
    "protobuf.createAssertDecode",
  )(
    (project) => (modulo) =>
      ProtobufAssertDecodeProgrammer.write(project)(modulo),
  );
}
