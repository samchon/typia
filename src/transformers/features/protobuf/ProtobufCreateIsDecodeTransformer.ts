import { ProtobufIsDecodeProgrammer } from "../../../programmers/protobuf/ProtobufIsDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateIsDecodeTransformer {
  export const transform = GenericTransformer.factory(
    "protobuf.createIsDecode",
  )((project) => (modulo) => ProtobufIsDecodeProgrammer.write(project)(modulo));
}
