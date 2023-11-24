import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createDecode_TypeTagDefault = _test_protobuf_decode(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  decode: (input) => typia.protobuf.decode<TypeTagDefault>(input),
  encode: typia.protobuf.createEncode<TypeTagDefault>(),
});
