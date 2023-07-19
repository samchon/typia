import { ProtobufEncodeProgrammer } from "../../../programmers/protobuf/ProtobufEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufEncodeTransformer {
    export const transform = GenericTransformer.scalar("Encode")(
        (project) => (modulo) =>
            ProtobufEncodeProgrammer.write(project)(modulo),
    );
}
