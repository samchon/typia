import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_isEncode_TypeTagRange = _test_protobuf_isEncode(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
  encode: (input) => typia.protobuf.isEncode<TypeTagRange>(input),
  decode: typia.protobuf.createDecode<TypeTagRange>(),
  message: typia.protobuf.message<TypeTagRange>(),
});
