import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_isDecode_TypeTagBigInt = (): void => _test_protobuf_isDecode(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)({
  decode: (input) => typia.protobuf.isDecode<TypeTagBigInt>(input),
  encode: typia.protobuf.createEncode<TypeTagBigInt>(),
});
