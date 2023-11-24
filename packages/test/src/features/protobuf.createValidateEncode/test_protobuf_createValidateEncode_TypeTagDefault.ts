import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createValidateEncode_TypeTagDefault =
  _test_protobuf_validateEncode("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )({
    encode: typia.protobuf.createValidateEncode<TypeTagDefault>(),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
  });
