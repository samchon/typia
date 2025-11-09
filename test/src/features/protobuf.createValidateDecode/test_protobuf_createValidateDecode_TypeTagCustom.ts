import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createValidateDecode_TypeTagCustom = (): void =>
  _test_protobuf_validateDecode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
    decode: typia.protobuf.createValidateDecode<TypeTagCustom>(),
    encode: typia.protobuf.createEncode<TypeTagCustom>(),
  });
