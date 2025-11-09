import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createValidateDecode_TypeTagPattern = (): void =>
  _test_protobuf_validateDecode("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    decode: typia.protobuf.createValidateDecode<TypeTagPattern>(),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
