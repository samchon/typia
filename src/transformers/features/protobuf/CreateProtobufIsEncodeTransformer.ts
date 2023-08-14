import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufIsEncodeTransformer {
    export const transform = GenericTransformer.factory(
        "protobuf.createIsEncode",
    )(
        (project) => (modulo) =>
            ProtobufIsEncodeProgrammer.write(project)(modulo),
    );
}
