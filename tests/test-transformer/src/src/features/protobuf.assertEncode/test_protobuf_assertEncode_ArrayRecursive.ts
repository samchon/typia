import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ArrayRecursive = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  encode: (input) => typia.protobuf.assertEncode<ArrayRecursive>(input),
  decode: typia.protobuf.createDecode<ArrayRecursive>(),
  message: typia.protobuf.message<ArrayRecursive>(),
});
