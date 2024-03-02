import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_assertEncodeCustom_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ArrayRecursiveUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
    message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
  });
