import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_message_DynamicTree = (): void =>
  _test_protobuf_message("DynamicTree")(typia.protobuf.message<DynamicTree>());
