import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createIsDecode_TypeTagArray =
  _test_protobuf_isDecode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    decode: (input) => typia.protobuf.isDecode<TypeTagArray>(input),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
  });
