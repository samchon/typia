import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createValidateDecode_TypeTagFormat = (): void =>
  _test_protobuf_validateDecode("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)({
    decode: typia.protobuf.createValidateDecode<TypeTagFormat>(),
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
  });
