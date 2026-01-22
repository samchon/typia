import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_validateEncode_TypeTagArray = (): void =>
  _test_protobuf_validateEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagArray>(input),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
    message: typia.protobuf.message<TypeTagArray>(),
  });
