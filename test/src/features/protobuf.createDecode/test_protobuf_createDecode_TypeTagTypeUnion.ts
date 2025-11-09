import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createDecode_TypeTagTypeUnion = (): void => _test_protobuf_decode(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
  encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
});
