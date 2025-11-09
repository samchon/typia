import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_validateEncode_ClassPropertyAssignment = (): void =>
  _test_protobuf_validateEncode(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    encode: (input) =>
      typia.protobuf.validateEncode<ClassPropertyAssignment>(input),
    decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
    message: typia.protobuf.message<ClassPropertyAssignment>(),
  });
