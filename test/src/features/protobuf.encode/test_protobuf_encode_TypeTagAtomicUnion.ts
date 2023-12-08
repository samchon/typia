import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createEncode_TypeTagAtomicUnion =
  _test_protobuf_encode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )({
    encode: (input) => typia.protobuf.encode<TypeTagAtomicUnion>(input),
    decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    message: typia.protobuf.message<TypeTagAtomicUnion>(),
  });
