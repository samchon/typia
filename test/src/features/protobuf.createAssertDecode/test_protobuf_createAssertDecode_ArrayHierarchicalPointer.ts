import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createAssertDecode_ArrayHierarchicalPointer =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
      decode: typia.protobuf.createAssertDecode<ArrayHierarchicalPointer>(),
      encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
    });
