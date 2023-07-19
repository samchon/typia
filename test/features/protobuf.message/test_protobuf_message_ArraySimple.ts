import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_protobuf_message_ArraySimple = _test_protobuf_message(
    "ArraySimple",
)(typia.protobuf.message<ArraySimple>());
