import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertDecode_ClassPropertyAssignment =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    decode: typia.protobuf.createAssertDecode<ClassPropertyAssignment>(),
    encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
  });
