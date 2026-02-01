import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_isDecode_ClassPropertyAssignment = (): void => _test_protobuf_isDecode(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  decode: (input) => typia.protobuf.isDecode<ClassPropertyAssignment>(input),
  encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
});
