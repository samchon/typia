import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createDecode_TypeTagArray = _test_protobuf_decode(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)({
  decode: typia.protobuf.createDecode<TypeTagArray>(),
  encode: typia.protobuf.createEncode<TypeTagArray>(),
});
