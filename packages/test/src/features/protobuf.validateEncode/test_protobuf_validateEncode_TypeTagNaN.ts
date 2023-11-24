import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createValidateEncode_TypeTagNaN =
  _test_protobuf_validateEncode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
    encode: (input) => typia.protobuf.validateEncode<TypeTagNaN>(input),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
