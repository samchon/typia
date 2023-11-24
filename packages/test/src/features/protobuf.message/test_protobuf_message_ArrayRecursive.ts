import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_message_ArrayRecursive = _test_protobuf_message(
  "ArrayRecursive",
)(typia.protobuf.message<ArrayRecursive>());
