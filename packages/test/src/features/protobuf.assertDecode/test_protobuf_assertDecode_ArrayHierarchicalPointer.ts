import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createAssertDecode_ArrayHierarchicalPointer =
  _test_protobuf_assertDecode(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    decode: (input) =>
      typia.protobuf.assertDecode<ArrayHierarchicalPointer>(input),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
