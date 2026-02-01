import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_isEncode_TypeTagDefault = (): void => _test_protobuf_isEncode(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  encode: (input) => typia.protobuf.isEncode<TypeTagDefault>(input),
  decode: typia.protobuf.createDecode<TypeTagDefault>(),
  message: typia.protobuf.message<TypeTagDefault>(),
});
