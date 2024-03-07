import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ClassNonPublic =
  _test_protobuf_assertEncode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    encode: (input) => typia.protobuf.assertEncode<ClassNonPublic>(input),
    decode: typia.protobuf.createDecode<ClassNonPublic>(),
    message: typia.protobuf.message<ClassNonPublic>(),
  });
