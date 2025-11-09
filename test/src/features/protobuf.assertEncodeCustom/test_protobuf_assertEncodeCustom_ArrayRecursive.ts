import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ArrayRecursive = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
  encode: (input) => typia.protobuf.assertEncode<ArrayRecursive>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ArrayRecursive>(),
  message: typia.protobuf.message<ArrayRecursive>(),
});
