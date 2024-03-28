import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_assertEncode_TypeTagDefault =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )({
    encode: (input) => typia.protobuf.assertEncode<TypeTagDefault>(input),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
  });
