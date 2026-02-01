import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createValidateDecode_TypeTagDefault = (): void => _test_protobuf_validateDecode(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)({
  decode: typia.protobuf.createValidateDecode<TypeTagDefault>(),
  encode: typia.protobuf.createEncode<TypeTagDefault>(),
});
