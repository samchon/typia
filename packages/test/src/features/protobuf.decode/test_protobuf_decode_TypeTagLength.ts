import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createDecode_TypeTagLength = _test_protobuf_decode(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  decode: (input) => typia.protobuf.decode<TypeTagLength>(input),
  encode: typia.protobuf.createEncode<TypeTagLength>(),
});
