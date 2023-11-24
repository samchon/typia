import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_message_ClassMethod = _test_protobuf_message(
  "ClassMethod",
)(typia.protobuf.message<ClassMethod>());
