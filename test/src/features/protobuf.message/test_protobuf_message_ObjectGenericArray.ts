import typia from "typia";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectGenericArray = (): void => _test_protobuf_message(
  "ObjectGenericArray",
)(typia.protobuf.message<ObjectGenericArray>());