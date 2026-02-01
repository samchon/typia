import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_validateDecode_ClassPropertyAssignment = (): void => _test_protobuf_validateDecode(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  decode: (input) => typia.protobuf.validateDecode<ClassPropertyAssignment>(input),
  encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
});
