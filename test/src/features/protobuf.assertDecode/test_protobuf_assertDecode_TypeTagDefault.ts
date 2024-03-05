import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_assertDecode_TypeTagDefault =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagDefault>(input),
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
  });
