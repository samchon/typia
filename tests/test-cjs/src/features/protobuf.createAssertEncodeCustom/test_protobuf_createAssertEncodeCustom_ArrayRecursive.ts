import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createAssertEncodeCustom_ArrayRecursive = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArrayRecursive",
  )<ArrayRecursive>(ArrayRecursive)({
    encode: typia.protobuf.createAssertEncode<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
  });
