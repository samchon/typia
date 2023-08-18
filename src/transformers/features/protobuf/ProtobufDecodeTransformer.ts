import { ProtobufDecodeProgrammer } from "../../../programmers/protobuf/ProtobufDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufDecodeTransformer {
    export const transform = GenericTransformer.scalar("protobuf.decode")(
        (project) => (modulo) =>
            ProtobufDecodeProgrammer.write(project)(modulo),
    );
}
