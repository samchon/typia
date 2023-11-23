import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertEncode_TypeTagRange =
  _test_protobuf_assertEncode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagRange>(input),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
  });
