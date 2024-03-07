import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_TypeTagNaN =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )({
    encode: (input) => typia.protobuf.assertEncode<TypeTagNaN>(input),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
