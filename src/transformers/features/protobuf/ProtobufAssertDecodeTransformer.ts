import { ProtobufAssertDecodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufAssertDecodeTransformer {
    export const transform = GenericTransformer.scalar("assertDecode")(
        (project) => (modulo) =>
            ProtobufAssertDecodeProgrammer.write(project)(modulo),
    );
}
