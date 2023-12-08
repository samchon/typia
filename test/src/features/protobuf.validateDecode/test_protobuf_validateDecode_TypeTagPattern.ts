import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createValidateDecode_TypeTagPattern =
  _test_protobuf_validateDecode("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    decode: (input) => typia.protobuf.validateDecode<TypeTagPattern>(input),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
