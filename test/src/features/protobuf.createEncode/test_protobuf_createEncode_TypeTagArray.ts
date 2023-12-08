import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createEncode_TypeTagArray = _test_protobuf_encode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  encode: typia.protobuf.createEncode<TypeTagArray>(),
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  message: typia.protobuf.message<TypeTagArray>(),
});
