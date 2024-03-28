import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertEncode_ArrayHierarchicalPointer =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    encode: (input) =>
      typia.protobuf.assertEncode<ArrayHierarchicalPointer>(input),
    decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
    message: typia.protobuf.message<ArrayHierarchicalPointer>(),
  });
