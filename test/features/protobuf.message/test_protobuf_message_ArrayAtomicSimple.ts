import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_protobuf_message_ArrayAtomicSimple = _test_protobuf_message(
    "ArrayAtomicSimple",
)(typia.protobuf.message<ArrayAtomicSimple>());
