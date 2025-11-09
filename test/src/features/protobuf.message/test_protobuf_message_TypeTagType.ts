import typia from "typia";
import { TypeTagType } from "../../structures/TypeTagType";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagType = (): void => _test_protobuf_message(
  "TypeTagType",
)(typia.protobuf.message<TypeTagType>());