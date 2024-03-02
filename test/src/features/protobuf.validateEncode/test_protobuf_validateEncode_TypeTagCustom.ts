import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_validateEncode_TypeTagCustom =
  _test_protobuf_validateEncode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagCustom>(input),
    decode: typia.protobuf.createDecode<TypeTagCustom>(),
    message: typia.protobuf.message<TypeTagCustom>(),
  });
