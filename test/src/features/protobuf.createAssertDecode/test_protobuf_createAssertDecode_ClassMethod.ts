import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ClassMethod =
  _test_protobuf_assertDecode(TypeGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )({
    decode: typia.protobuf.createAssertDecode<ClassMethod>(),
    encode: typia.protobuf.createEncode<ClassMethod>(),
  });
