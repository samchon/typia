import typia from "typia";
import { TypeTagArray } from "../../structures/TypeTagArray";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagArray = _test_protobuf_message(
  "TypeTagArray",
)(typia.protobuf.message<TypeTagArray>());
