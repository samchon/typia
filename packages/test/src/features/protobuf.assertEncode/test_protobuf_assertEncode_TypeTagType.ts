import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createAssertEncode_TypeTagType =
  _test_protobuf_assertEncode("TypeTagType")<TypeTagType>(TypeTagType)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagType>(input),
    decode: typia.protobuf.createDecode<TypeTagType>(),
    message: typia.protobuf.message<TypeTagType>(),
  });
