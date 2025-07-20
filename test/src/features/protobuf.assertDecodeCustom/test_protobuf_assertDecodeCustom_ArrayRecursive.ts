import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_assertDecodeCustom_ArrayRecursive = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "ArrayRecursive",
  )<ArrayRecursive>(ArrayRecursive)({
    decode: (input) =>
      typia.protobuf.assertDecode<ArrayRecursive>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
  });
