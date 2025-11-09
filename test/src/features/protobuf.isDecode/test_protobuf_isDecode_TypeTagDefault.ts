import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_isDecode_TypeTagDefault = (): void => _test_protobuf_isDecode(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  decode: (input) => typia.protobuf.isDecode<TypeTagDefault>(input),
  encode: typia.protobuf.createEncode<TypeTagDefault>(),
});
