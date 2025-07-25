import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createValidateDecode_TypeTagLength = (): void =>
  _test_protobuf_validateDecode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    decode: typia.protobuf.createValidateDecode<TypeTagLength>(),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
