import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createIsEncode_TypeTagDefault = (): void =>
  _test_protobuf_isEncode("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)({
    encode: typia.protobuf.createIsEncode<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
  });
