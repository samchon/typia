import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createValidateDecode_ArrayRecursiveUnionExplicitPointer = (): void => _test_protobuf_validateDecode(
  "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
  decode: typia.protobuf.createValidateDecode<ArrayRecursiveUnionExplicitPointer>(),
  encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
});
