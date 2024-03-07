import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ArrayHierarchicalPointer =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    decode: typia.protobuf.createAssertDecode<ArrayHierarchicalPointer>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
