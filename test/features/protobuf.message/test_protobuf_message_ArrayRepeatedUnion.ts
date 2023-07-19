import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_protobuf_message_ArrayRepeatedUnion = _test_protobuf_message(
    "ArrayRepeatedUnion",
)(typia.protobuf.message<ArrayRepeatedUnion>());
