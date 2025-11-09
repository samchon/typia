import typia from "typia";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectHttpArray = (): void => _test_protobuf_message(
  "ObjectHttpArray",
)(typia.protobuf.message<ObjectHttpArray>());