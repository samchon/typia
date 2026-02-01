import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createValidateDecode_TypeTagInfinite = (): void => _test_protobuf_validateDecode(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  decode: typia.protobuf.createValidateDecode<TypeTagInfinite>(),
  encode: typia.protobuf.createEncode<TypeTagInfinite>(),
});
