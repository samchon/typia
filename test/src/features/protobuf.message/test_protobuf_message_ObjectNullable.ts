import typia from "typia";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectNullable = _test_protobuf_message(
  "ObjectNullable",
)(typia.protobuf.message<ObjectNullable>());