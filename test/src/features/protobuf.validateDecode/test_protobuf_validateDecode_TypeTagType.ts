import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createValidateDecode_TypeTagType =
  _test_protobuf_validateDecode("TypeTagType")<TypeTagType>(TypeTagType)({
    decode: (input) => typia.protobuf.validateDecode<TypeTagType>(input),
    encode: typia.protobuf.createEncode<TypeTagType>(),
  });
