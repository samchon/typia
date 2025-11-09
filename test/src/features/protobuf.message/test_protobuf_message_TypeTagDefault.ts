import typia from "typia";
import { TypeTagDefault } from "../../structures/TypeTagDefault";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagDefault = (): void => _test_protobuf_message(
  "TypeTagDefault",
)(typia.protobuf.message<TypeTagDefault>());