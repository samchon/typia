import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createAssertDecodeCustom_ArrayRecursive =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ArrayRecursive",
  )<ArrayRecursive>(ArrayRecursive)({
    decode: typia.protobuf.createAssertDecode<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
  });
