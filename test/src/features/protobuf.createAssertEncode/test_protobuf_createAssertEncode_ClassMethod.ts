import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../structures/ClassMethod";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ClassMethod = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  encode: typia.protobuf.createAssertEncode<ClassMethod>(),
  decode: typia.protobuf.createDecode<ClassMethod>(),
  message: typia.protobuf.message<ClassMethod>(),
});
