import { ProtobufValidateEncodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateValidateEncodeTransformer {
    export const transform = GenericTransformer.factory(
        "protobuf.createValidateEncode",
    )(
        (project) => (modulo) =>
            ProtobufValidateEncodeProgrammer.write(project)(modulo),
    );
}
