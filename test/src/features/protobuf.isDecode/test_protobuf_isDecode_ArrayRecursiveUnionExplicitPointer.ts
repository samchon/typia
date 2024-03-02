import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_isDecode_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_isDecode(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    decode: (input) =>
      typia.protobuf.isDecode<ArrayRecursiveUnionExplicitPointer>(input),
    encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
  });
