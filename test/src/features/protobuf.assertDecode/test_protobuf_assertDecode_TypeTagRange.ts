import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_assertDecode_TypeTagRange = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagRange>(input),
    encode: typia.protobuf.createEncode<TypeTagRange>(),
  });
