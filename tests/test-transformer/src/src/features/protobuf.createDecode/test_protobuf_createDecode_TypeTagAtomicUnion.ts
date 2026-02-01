import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createDecode_TypeTagAtomicUnion = (): void => _test_protobuf_decode(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
  decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
  encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
});
