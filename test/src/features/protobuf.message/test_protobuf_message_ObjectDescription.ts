import typia from "typia";
import { ObjectDescription } from "../../structures/ObjectDescription";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectDescription = _test_protobuf_message(
  "ObjectDescription",
)(typia.protobuf.message<ObjectDescription>());