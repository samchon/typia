import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createIsEncode_TypeTagFormat = (): void =>
  _test_protobuf_isEncode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
    encode: typia.protobuf.createIsEncode<TypeTagFormat>(),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
  });
