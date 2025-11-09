import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TypeTagLength = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  encode: (input) => typia.protobuf.assertEncode<TypeTagLength>(input),
  decode: typia.protobuf.createDecode<TypeTagLength>(),
  message: typia.protobuf.message<TypeTagLength>(),
});
