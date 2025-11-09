import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertDecode_ArrayHierarchicalPointer = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    decode: (input) =>
      typia.protobuf.assertDecode<ArrayHierarchicalPointer>(input),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
