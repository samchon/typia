import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createAssertDecode_ClassNonPublic = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: typia.protobuf.createAssertDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
