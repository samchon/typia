import typia from "typia";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectJsonTag = (): void => _test_protobuf_message(
  "ObjectJsonTag",
)(typia.protobuf.message<ObjectJsonTag>());