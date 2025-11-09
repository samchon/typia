import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ArrayRecursive = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  decode: (input) => typia.protobuf.assertDecode<ArrayRecursive>(input),
  encode: typia.protobuf.createEncode<ArrayRecursive>(),
});
