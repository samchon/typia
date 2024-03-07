import typia from "typia";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectGenericAlias = _test_protobuf_message(
  "ObjectGenericAlias",
)(typia.protobuf.message<ObjectGenericAlias>());
