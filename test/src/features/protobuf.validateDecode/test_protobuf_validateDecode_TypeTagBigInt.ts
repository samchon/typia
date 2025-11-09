import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_validateDecode_TypeTagBigInt = (): void => _test_protobuf_validateDecode(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  decode: (input) => typia.protobuf.validateDecode<TypeTagBigInt>(input),
  encode: typia.protobuf.createEncode<TypeTagBigInt>(),
});
