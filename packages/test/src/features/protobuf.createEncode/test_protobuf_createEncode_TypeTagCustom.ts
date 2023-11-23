import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createEncode_TypeTagCustom = _test_protobuf_encode(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  encode: typia.protobuf.createEncode<TypeTagCustom>(),
  decode: typia.protobuf.createDecode<TypeTagCustom>(),
  message: typia.protobuf.message<TypeTagCustom>(),
});
