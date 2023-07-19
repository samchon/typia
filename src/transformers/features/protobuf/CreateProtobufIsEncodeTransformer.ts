import { ProtobufIsEncodeProgrammer } from "../../../programmers/protobuf/ProtobufIsEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufIsEncodeTransformer {
    export const transform = GenericTransformer.factory("createIsEncode")(
        (project) => (modulo) =>
            ProtobufIsEncodeProgrammer.write(project)(modulo),
    );
}
