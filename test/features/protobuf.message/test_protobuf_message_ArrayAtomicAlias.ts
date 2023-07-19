import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_protobuf_message_ArrayAtomicAlias = _test_protobuf_message(
    "ArrayAtomicAlias",
)(typia.protobuf.message<ArrayAtomicAlias>());
