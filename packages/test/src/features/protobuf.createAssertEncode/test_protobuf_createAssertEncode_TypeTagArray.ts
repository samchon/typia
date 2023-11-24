import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertEncode_TypeTagArray =
  _test_protobuf_assertEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    encode: typia.protobuf.createAssertEncode<TypeTagArray>(),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
    message: typia.protobuf.message<TypeTagArray>(),
  });
