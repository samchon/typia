import typia from "typia";
import { ObjectPartial } from "../../structures/ObjectPartial";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectPartial = _test_protobuf_message(
  "ObjectPartial",
)(typia.protobuf.message<ObjectPartial>());