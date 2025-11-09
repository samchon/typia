import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createEncode_TypeTagInfinite = (): void => _test_protobuf_encode(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  encode: typia.protobuf.createEncode<TypeTagInfinite>(),
  decode: typia.protobuf.createDecode<TypeTagInfinite>(),
  message: typia.protobuf.message<TypeTagInfinite>(),
});
