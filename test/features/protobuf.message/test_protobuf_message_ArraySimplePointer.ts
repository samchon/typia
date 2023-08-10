import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_protobuf_message_ArraySimplePointer = _test_protobuf_message(
    "ArraySimplePointer",
)(typia.protobuf.message<ArraySimplePointer>());
