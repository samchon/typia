import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_TypeTagTypeBigInt = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
});
