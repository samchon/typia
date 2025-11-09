import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_encode_ArrayRecursive = (): void => _test_protobuf_encode(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  encode: (input) => typia.protobuf.encode<ArrayRecursive>(input),
  decode: typia.protobuf.createDecode<ArrayRecursive>(),
  message: typia.protobuf.message<ArrayRecursive>(),
});
