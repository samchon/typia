import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createDecode_TypeTagArray = _test_protobuf_decode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  decode: (input) => typia.protobuf.decode<TypeTagArray>(input),
  encode: typia.protobuf.createEncode<TypeTagArray>(),
});
