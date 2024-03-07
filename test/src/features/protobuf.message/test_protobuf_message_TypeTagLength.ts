import typia from "typia";
import { TypeTagLength } from "../../structures/TypeTagLength";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagLength = _test_protobuf_message(
  "TypeTagLength",
)(typia.protobuf.message<TypeTagLength>());
