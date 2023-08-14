import { ProtobufSizeProgrammer } from "../../../programmers/protobuf/ProtobufSizeProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateProtobufSizeTransformer {
    export const transform = GenericTransformer.factory("protobuf.createSize")(
        (project) => (modulo) => ProtobufSizeProgrammer.write(project)(modulo),
    );
}
