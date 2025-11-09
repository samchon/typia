import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ArrayRecursiveUnionExplicitPointer = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
  decode: typia.protobuf.createAssertDecode<ArrayRecursiveUnionExplicitPointer>(),
  encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
});
