import { ProtobufSizeProgrammer } from "../../../programmers/protobuf/ProtobufSizeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ProtobufSizeTransformer {
    export const transform = GenericTransformer.scalar("protobuf.size")(
        (project) => (modulo) => ProtobufSizeProgrammer.write(project)(modulo),
    );
}
