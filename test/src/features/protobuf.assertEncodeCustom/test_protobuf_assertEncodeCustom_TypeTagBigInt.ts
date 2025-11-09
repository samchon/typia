import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagBigInt = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  encode: (input) => typia.protobuf.assertEncode<TypeTagBigInt>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagBigInt>(),
  message: typia.protobuf.message<TypeTagBigInt>(),
});
