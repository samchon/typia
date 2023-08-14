import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufIsEncodeTransformer {
    export const transform = GenericTransformer.scalar("protobuf.isEncode")(
        (project) => (modulo) =>
            ProtobufIsEncodeProgrammer.write(project)(modulo),
    );
}
