import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_validateEncode_TypeTagInfinite =
  _test_protobuf_validateEncode("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )({
    encode: (input) => typia.protobuf.validateEncode<TypeTagInfinite>(input),
    decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    message: typia.protobuf.message<TypeTagInfinite>(),
  });
