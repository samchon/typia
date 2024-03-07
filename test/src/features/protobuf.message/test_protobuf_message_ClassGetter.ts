import typia from "typia";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ClassGetter = _test_protobuf_message(
  "ClassGetter",
)(typia.protobuf.message<ClassGetter>());
