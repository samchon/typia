import typia from "typia";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_TypeTagAtomicUnion = _test_protobuf_message(
  "TypeTagAtomicUnion",
)(typia.protobuf.message<TypeTagAtomicUnion>());