import typia from "typia";
import { TypeTagNaN } from "../../structures/TypeTagNaN";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagNaN = _test_protobuf_message(
  "TypeTagNaN",
)(typia.protobuf.message<TypeTagNaN>());