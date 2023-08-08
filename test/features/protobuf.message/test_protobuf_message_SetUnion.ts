import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { SetUnion } from "../../structures/SetUnion";

export const test_protobuf_message_SetUnion = _test_protobuf_message(
    "SetUnion",
    typia.protobuf.message<SetUnion>(),
);
