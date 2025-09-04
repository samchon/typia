import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createIsDecode_TypeTagInfinite = (): void =>
  _test_protobuf_isDecode("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)({
    decode: typia.protobuf.createIsDecode<TypeTagInfinite>(),
    encode: typia.protobuf.createEncode<TypeTagInfinite>(),
  });
