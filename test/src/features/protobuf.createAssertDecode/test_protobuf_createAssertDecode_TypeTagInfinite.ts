import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagInfinite = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  decode: typia.protobuf.createAssertDecode<TypeTagInfinite>(),
  encode: typia.protobuf.createEncode<TypeTagInfinite>(),
});
