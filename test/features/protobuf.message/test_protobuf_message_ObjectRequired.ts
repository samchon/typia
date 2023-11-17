import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_message_ObjectRequired = _test_protobuf_message(
  "ObjectRequired",
)(typia.protobuf.message<ObjectRequired>());
