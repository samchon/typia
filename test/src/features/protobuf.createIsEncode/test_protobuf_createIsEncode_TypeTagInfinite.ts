import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createIsEncode_TypeTagInfinite = (): void =>
  _test_protobuf_isEncode("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)({
    encode: typia.protobuf.createIsEncode<TypeTagInfinite>(),
    decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    message: typia.protobuf.message<TypeTagInfinite>(),
  });
