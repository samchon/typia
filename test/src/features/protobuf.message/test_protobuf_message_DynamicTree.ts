import typia from "typia";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_DynamicTree = _test_protobuf_message(
  "DynamicTree",
)(typia.protobuf.message<DynamicTree>());
