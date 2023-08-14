import { ProtobufValidateEncodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufValidateEncodeTransformer {
    export const transform = GenericTransformer.scalar(
        "protobuf.validateEncode",
    )(
        (project) => (modulo) =>
            ProtobufValidateEncodeProgrammer.write(project)(modulo),
    );
}
