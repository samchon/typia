import { ProtobufAssertDecodeProgrammer } from "../../../programmers/protobuf/ProtobufAssertDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufAssertDecodeTransformer {
    export const transform = GenericTransformer.factory("createAssertDecode")(
        (project) => (modulo) =>
            ProtobufAssertDecodeProgrammer.write(project)(modulo),
    );
}
