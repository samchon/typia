import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { SetSimple } from "../../structures/SetSimple";

export const test_protobuf_message_SetSimple = _test_protobuf_message(
    "SetSimple",
    typia.protobuf.message<SetSimple>(),
);
