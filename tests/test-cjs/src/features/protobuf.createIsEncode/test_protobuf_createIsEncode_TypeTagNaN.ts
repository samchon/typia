import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createIsEncode_TypeTagNaN = (): void =>
  _test_protobuf_isEncode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
    encode: typia.protobuf.createIsEncode<TypeTagNaN>(),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
