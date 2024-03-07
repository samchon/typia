import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ClassNonPublic =
  _test_protobuf_assertDecode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: typia.protobuf.createAssertDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
