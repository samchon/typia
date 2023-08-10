import { ProtobufIsDecodeProgrammer } from "../../../programmers/protobuf/ProtobufIsDecodeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufIsDecodeTransformer {
    export const transform = GenericTransformer.scalar("isDecode")(
        (project) => (modulo) =>
            ProtobufIsDecodeProgrammer.write(project)(modulo),
    );
}
