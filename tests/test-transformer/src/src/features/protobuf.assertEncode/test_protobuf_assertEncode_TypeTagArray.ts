import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TypeTagArray = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  encode: (input) => typia.protobuf.assertEncode<TypeTagArray>(input),
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  message: typia.protobuf.message<TypeTagArray>(),
});
