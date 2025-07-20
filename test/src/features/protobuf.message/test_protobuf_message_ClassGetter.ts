import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_message_ClassGetter = (): void =>
  _test_protobuf_message("ClassGetter")(typia.protobuf.message<ClassGetter>());
