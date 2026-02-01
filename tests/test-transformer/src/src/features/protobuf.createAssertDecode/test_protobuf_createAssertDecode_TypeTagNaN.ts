import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagNaN = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
  decode: typia.protobuf.createAssertDecode<TypeTagNaN>(),
  encode: typia.protobuf.createEncode<TypeTagNaN>(),
});
