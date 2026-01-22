import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createValidateDecode_ClassPropertyAssignment =
  (): void =>
    _test_protobuf_validateDecode(
      "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
      decode: typia.protobuf.createValidateDecode<ClassPropertyAssignment>(),
      encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
