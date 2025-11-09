import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ClassPropertyAssignment = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  decode: (input) => typia.protobuf.assertDecode<ClassPropertyAssignment>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
});
