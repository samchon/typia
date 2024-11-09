import typia from "typia";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagInfinite = _test_protobuf_message(
  "TypeTagInfinite",
)(typia.protobuf.message<TypeTagInfinite>());