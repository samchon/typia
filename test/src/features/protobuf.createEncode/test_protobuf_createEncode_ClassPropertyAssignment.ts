import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createEncode_ClassPropertyAssignment = (): void => _test_protobuf_encode(
  "ClassPropertyAssignment",
)<ClassPropertyAssignment>(ClassPropertyAssignment)({
  encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
  decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
  message: typia.protobuf.message<ClassPropertyAssignment>(),
});
