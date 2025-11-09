import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TypeTagCustom = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  encode: (input) => typia.protobuf.assertEncode<TypeTagCustom>(input),
  decode: typia.protobuf.createDecode<TypeTagCustom>(),
  message: typia.protobuf.message<TypeTagCustom>(),
});
