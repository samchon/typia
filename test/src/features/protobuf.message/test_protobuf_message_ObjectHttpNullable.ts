import typia from "typia";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectHttpNullable = (): void => _test_protobuf_message(
  "ObjectHttpNullable",
)(typia.protobuf.message<ObjectHttpNullable>());