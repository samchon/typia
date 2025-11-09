import typia from "typia";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagTypeUnion = (): void => _test_protobuf_message(
  "TypeTagTypeUnion",
)(typia.protobuf.message<TypeTagTypeUnion>());