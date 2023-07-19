import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_protobuf_message_ArrayUnion = _test_protobuf_message(
    "ArrayUnion",
)(typia.protobuf.message<ArrayUnion>());
