import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createDecode_TypeTagInfinite = _test_protobuf_decode(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  decode: (input) => typia.protobuf.decode<TypeTagInfinite>(input),
  encode: typia.protobuf.createEncode<TypeTagInfinite>(),
});
