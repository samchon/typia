import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createIsEncode_TypeTagPattern =
  _test_protobuf_isEncode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
    encode: typia.protobuf.createIsEncode<TypeTagPattern>(),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
