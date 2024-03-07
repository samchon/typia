import typia from "typia";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_DynamicSimple = _test_protobuf_message(
  "DynamicSimple",
)(typia.protobuf.message<DynamicSimple>());
