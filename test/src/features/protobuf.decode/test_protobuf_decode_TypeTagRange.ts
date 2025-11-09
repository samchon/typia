import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_decode_TypeTagRange = (): void => _test_protobuf_decode(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
  decode: (input) => typia.protobuf.decode<TypeTagRange>(input),
  encode: typia.protobuf.createEncode<TypeTagRange>(),
});
