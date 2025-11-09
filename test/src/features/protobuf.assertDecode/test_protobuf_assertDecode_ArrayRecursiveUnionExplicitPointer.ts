import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_assertDecode_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      decode: (input) =>
        typia.protobuf.assertDecode<ArrayRecursiveUnionExplicitPointer>(input),
      encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
