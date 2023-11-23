import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createAssertDecode_TypeTagLength =
  _test_protobuf_assertDecode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    decode: (input) => typia.protobuf.assertDecode<TypeTagLength>(input),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
