import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_assertDecode_ClassMethod =
  _test_protobuf_assertDecode(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )({
    decode: (input) => typia.protobuf.assertDecode<ClassMethod>(input),
    encode: typia.protobuf.createEncode<ClassMethod>(),
  });
