import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_assertDecode_ClassNonPublic = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    decode: (input) => typia.protobuf.assertDecode<ClassNonPublic>(input),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
