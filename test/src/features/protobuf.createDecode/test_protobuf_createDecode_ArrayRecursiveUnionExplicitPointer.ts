import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createDecode_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_decode(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
      encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
