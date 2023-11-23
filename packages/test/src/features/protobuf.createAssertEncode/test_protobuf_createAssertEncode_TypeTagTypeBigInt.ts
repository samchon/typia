import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertEncode_TypeTagTypeBigInt =
  _test_protobuf_assertEncode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagTypeBigInt>(),
    decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
    message: typia.protobuf.message<TypeTagTypeBigInt>(),
  });
