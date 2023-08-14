import { ProtobufAssertEncodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertEncodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufAssertEncodeTransformer {
    export const transform = GenericTransformer.scalar("protobuf.assertEncode")(
        (project) => (modulo) =>
            ProtobufAssertEncodeProgrammer.write(project)(modulo),
    );
}
