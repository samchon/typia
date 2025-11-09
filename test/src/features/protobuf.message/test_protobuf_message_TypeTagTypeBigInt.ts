import typia from "typia";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagTypeBigInt = (): void => _test_protobuf_message(
  "TypeTagTypeBigInt",
)(typia.protobuf.message<TypeTagTypeBigInt>());