import { ProtobufEncodeProgrammer } from "../../../programmers/protobuf/ProtobufEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufEncodeTransformer {
    export const transform = GenericTransformer.scalar("protobuf.encode")(
        (project) => (modulo) =>
            ProtobufEncodeProgrammer.write(project)(modulo),
    );
}
