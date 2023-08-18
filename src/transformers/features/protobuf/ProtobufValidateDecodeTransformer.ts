import { ProtobufValidateDecodeProgrammer } from "../../../programmers/protobuf/ProtobufValidateDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufValidateDecodeTransformer {
    export const transform = GenericTransformer.scalar(
        "protobuf.validateDecode",
    )(
        (project) => (modulo) =>
            ProtobufValidateDecodeProgrammer.write(project)(modulo),
    );
}
