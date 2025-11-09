import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
  encode: (input) => typia.protobuf.assertEncode<ArrayRecursiveUnionExplicitPointer>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
  message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
});
