import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_isEncode_TypeTagCustom = (): void =>
  _test_protobuf_isEncode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
    encode: (input) => typia.protobuf.isEncode<TypeTagCustom>(input),
    decode: typia.protobuf.createDecode<TypeTagCustom>(),
    message: typia.protobuf.message<TypeTagCustom>(),
  });
