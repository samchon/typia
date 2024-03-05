import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_isDecode_ArrayRecursive = _test_protobuf_isDecode(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  decode: (input) => typia.protobuf.isDecode<ArrayRecursive>(input),
  encode: typia.protobuf.createEncode<ArrayRecursive>(),
});
