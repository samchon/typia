import typia from "typia";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectOptional = _test_protobuf_message(
  "ObjectOptional",
)(typia.protobuf.message<ObjectOptional>());