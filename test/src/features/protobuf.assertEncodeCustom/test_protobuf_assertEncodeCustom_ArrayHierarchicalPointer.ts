import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertEncodeCustom_ArrayHierarchicalPointer =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ArrayHierarchicalPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
    message: typia.protobuf.message<ArrayHierarchicalPointer>(),
  });
