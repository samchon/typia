import typia from "typia";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagBigInt = (): void => _test_protobuf_message(
  "TypeTagBigInt",
)(typia.protobuf.message<TypeTagBigInt>());