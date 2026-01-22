import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_isEncode_TypeTagPattern = (): void =>
  _test_protobuf_isEncode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
    encode: (input) => typia.protobuf.isEncode<TypeTagPattern>(input),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
