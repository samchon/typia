import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_decode_TypeTagPattern = (): void =>
  _test_protobuf_decode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
    decode: (input) => typia.protobuf.decode<TypeTagPattern>(input),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
