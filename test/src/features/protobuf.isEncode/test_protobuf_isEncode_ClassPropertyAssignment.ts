import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_isEncode_ClassPropertyAssignment = (): void =>
  _test_protobuf_isEncode("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )({
    encode: (input) => typia.protobuf.isEncode<ClassPropertyAssignment>(input),
    decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
    message: typia.protobuf.message<ClassPropertyAssignment>(),
  });
