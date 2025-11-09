import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TypeTagCustom = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagCustom>(input),
  encode: typia.protobuf.createEncode<TypeTagCustom>(),
});
