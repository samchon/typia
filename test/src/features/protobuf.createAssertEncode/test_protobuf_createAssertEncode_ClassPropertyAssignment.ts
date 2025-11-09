import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ClassPropertyAssignment = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  encode: typia.protobuf.createAssertEncode<ClassPropertyAssignment>(),
  decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
  message: typia.protobuf.message<ClassPropertyAssignment>(),
});
