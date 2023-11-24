import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertDecode_TypeTagRange =
  _test_protobuf_assertDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
    decode: (input) => typia.protobuf.assertDecode<TypeTagRange>(input),
    encode: typia.protobuf.createEncode<TypeTagRange>(),
  });
