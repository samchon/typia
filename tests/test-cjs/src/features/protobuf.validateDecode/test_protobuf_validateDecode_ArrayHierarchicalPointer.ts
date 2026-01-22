import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_validateDecode_ArrayHierarchicalPointer = (): void =>
  _test_protobuf_validateDecode(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    decode: (input) =>
      typia.protobuf.validateDecode<ArrayHierarchicalPointer>(input),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
