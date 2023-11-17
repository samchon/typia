import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateIsEncodeTransformer {
  export const transform = GenericTransformer.factory(
    "protobuf.createIsEncode",
  )((project) => (modulo) => ProtobufIsEncodeProgrammer.write(project)(modulo));
}
