import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagFormat = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  decode: typia.protobuf.createAssertDecode<TypeTagFormat>(),
  encode: typia.protobuf.createEncode<TypeTagFormat>(),
});
