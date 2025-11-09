import typia from "typia";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectHttpUndefindable = (): void => _test_protobuf_message(
  "ObjectHttpUndefindable",
)(typia.protobuf.message<ObjectHttpUndefindable>());