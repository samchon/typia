import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createValidateDecode_TypeTagLength =
  _test_protobuf_validateDecode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    decode: (input) => typia.protobuf.validateDecode<TypeTagLength>(input),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
