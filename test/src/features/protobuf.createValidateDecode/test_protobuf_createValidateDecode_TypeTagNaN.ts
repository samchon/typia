import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createValidateDecode_TypeTagNaN = (): void =>
  _test_protobuf_validateDecode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
    decode: typia.protobuf.createValidateDecode<TypeTagNaN>(),
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
  });
