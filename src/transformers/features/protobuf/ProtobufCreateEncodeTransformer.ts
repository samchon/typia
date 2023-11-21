import { ProtobufEncodeProgrammer } from "../../../programmers/protobuf/ProtobufEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateEncodeTransformer {
  export const transform = GenericTransformer.factory("protobuf.createEncode")(
    (project) => (modulo) => ProtobufEncodeProgrammer.write(project)(modulo),
  );
}
