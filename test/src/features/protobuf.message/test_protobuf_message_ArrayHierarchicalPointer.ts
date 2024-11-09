import typia from "typia";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ArrayHierarchicalPointer = _test_protobuf_message(
  "ArrayHierarchicalPointer",
)(typia.protobuf.message<ArrayHierarchicalPointer>());