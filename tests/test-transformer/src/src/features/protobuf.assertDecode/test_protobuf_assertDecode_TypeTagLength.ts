import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TypeTagLength = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagLength>(input),
  encode: typia.protobuf.createEncode<TypeTagLength>(),
});
