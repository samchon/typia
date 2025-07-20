import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createDecode_ClassPropertyAssignment = (): void =>
  _test_protobuf_decode("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )({
    decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
    encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
  });
