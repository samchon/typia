import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createEncode_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_encode(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
    message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
  });
