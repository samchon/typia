import typia from "typia";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectSimple = _test_protobuf_message(
  "ObjectSimple",
)(typia.protobuf.message<ObjectSimple>());