import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_isDecode_TypeTagPattern = (): void =>
  _test_protobuf_isDecode("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)({
    decode: (input) => typia.protobuf.isDecode<TypeTagPattern>(input),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
