import typia from "typia";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectIntersection = _test_protobuf_message(
  "ObjectIntersection",
)(typia.protobuf.message<ObjectIntersection>());