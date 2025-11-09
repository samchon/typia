import typia from "typia";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectHttpConstant = (): void => _test_protobuf_message(
  "ObjectHttpConstant",
)(typia.protobuf.message<ObjectHttpConstant>());