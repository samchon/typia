import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createValidateEncode_TypeTagPattern =
  _test_protobuf_validateEncode("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    encode: (input) => typia.protobuf.validateEncode<TypeTagPattern>(input),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
