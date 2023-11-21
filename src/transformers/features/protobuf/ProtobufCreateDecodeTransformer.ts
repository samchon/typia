import { ProtobufDecodeProgrammer } from "../../../programmers/protobuf/ProtobufDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateDecodeTransformer {
  export const transform = GenericTransformer.factory("protobuf.createDecode")(
    (project) => (modulo) => ProtobufDecodeProgrammer.write(project)(modulo),
  );
}
