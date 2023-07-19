import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_protobuf_message_ArrayMatrix = _test_protobuf_message(
    "ArrayMatrix",
)(typia.protobuf.message<ArrayMatrix>());
