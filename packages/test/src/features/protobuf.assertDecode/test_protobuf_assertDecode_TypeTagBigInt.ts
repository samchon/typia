import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_createAssertDecode_TypeTagBigInt =
  _test_protobuf_assertDecode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
    decode: (input) => typia.protobuf.assertDecode<TypeTagBigInt>(input),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
  });
