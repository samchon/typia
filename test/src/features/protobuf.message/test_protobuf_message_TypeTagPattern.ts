import typia from "typia";
import { TypeTagPattern } from "../../structures/TypeTagPattern";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagPattern = _test_protobuf_message(
  "TypeTagPattern",
)(typia.protobuf.message<TypeTagPattern>());
