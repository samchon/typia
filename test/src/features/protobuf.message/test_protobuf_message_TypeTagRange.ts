import typia from "typia";
import { TypeTagRange } from "../../structures/TypeTagRange";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagRange = _test_protobuf_message(
  "TypeTagRange",
)(typia.protobuf.message<TypeTagRange>());