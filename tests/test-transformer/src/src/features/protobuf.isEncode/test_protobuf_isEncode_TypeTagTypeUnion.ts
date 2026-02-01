import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_isEncode_TypeTagTypeUnion = (): void => _test_protobuf_isEncode(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  encode: (input) => typia.protobuf.isEncode<TypeTagTypeUnion>(input),
  decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
  message: typia.protobuf.message<TypeTagTypeUnion>(),
});
