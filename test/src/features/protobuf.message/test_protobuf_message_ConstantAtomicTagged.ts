import typia from "typia";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ConstantAtomicTagged = _test_protobuf_message(
  "ConstantAtomicTagged",
)(typia.protobuf.message<ConstantAtomicTagged>());