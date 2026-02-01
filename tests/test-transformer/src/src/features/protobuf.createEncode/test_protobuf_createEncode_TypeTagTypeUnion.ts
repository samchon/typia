import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createEncode_TypeTagTypeUnion = (): void => _test_protobuf_encode(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
  message: typia.protobuf.message<TypeTagTypeUnion>(),
});
