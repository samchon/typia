import typia from "typia";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ClassPropertyAssignment = _test_protobuf_message(
  "ClassPropertyAssignment",
)(typia.protobuf.message<ClassPropertyAssignment>());