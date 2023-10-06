import { ProtobufAssertEncodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufCreateAssertEncodeTransformer {
    export const transform = GenericTransformer.factory(
        "protobuf.createAssertEncode",
    )(
        (project) => (modulo) =>
            ProtobufAssertEncodeProgrammer.write(project)(modulo),
    );
}
