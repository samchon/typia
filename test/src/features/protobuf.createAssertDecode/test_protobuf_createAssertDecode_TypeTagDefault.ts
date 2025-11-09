import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_TypeTagDefault = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  decode: typia.protobuf.createAssertDecode<TypeTagDefault>(),
  encode: typia.protobuf.createEncode<TypeTagDefault>(),
});
