import typia from "typia";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ClassNonPublic = _test_protobuf_message(
  "ClassNonPublic",
)(typia.protobuf.message<ClassNonPublic>());