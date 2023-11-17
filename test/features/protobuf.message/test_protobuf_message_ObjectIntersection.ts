import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_message_ObjectIntersection = _test_protobuf_message(
  "ObjectIntersection",
)(typia.protobuf.message<ObjectIntersection>());
