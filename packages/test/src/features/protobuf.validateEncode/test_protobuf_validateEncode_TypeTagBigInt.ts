import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createValidateEncode_TypeTagBigInt =
  _test_protobuf_validateEncode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagBigInt>(input),
    decode: typia.protobuf.createDecode<TypeTagBigInt>(),
    message: typia.protobuf.message<TypeTagBigInt>(),
  });
