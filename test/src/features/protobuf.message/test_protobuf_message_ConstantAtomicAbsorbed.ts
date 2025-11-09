import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ConstantAtomicAbsorbed = (): void => _test_protobuf_message(
  "ConstantAtomicAbsorbed",
)(typia.protobuf.message<ConstantAtomicAbsorbed>());