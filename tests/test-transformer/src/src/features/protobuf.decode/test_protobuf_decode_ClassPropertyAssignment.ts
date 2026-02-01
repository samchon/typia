import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_decode_ClassPropertyAssignment = (): void => _test_protobuf_decode(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  decode: (input) => typia.protobuf.decode<ClassPropertyAssignment>(input),
  encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
});
