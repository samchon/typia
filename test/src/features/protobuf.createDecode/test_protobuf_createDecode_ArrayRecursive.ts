import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createDecode_ArrayRecursive = (): void => _test_protobuf_decode(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  decode: typia.protobuf.createDecode<ArrayRecursive>(),
  encode: typia.protobuf.createEncode<ArrayRecursive>(),
});
