import { ProtobufValidateDecodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufValidateDecodeTransformer {
    export const transform = GenericTransformer.factory(
        "protobuf.createValidateDecode",
    )(
        (project) => (modulo) =>
            ProtobufValidateDecodeProgrammer.write(project)(modulo),
    );
}
