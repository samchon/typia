import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_isEncode_TypeTagArray = _test_protobuf_isEncode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  encode: (input) => typia.protobuf.isEncode<TypeTagArray>(input),
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  message: typia.protobuf.message<TypeTagArray>(),
});
