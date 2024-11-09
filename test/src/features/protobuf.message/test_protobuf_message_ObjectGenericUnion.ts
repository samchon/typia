import typia from "typia";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectGenericUnion = _test_protobuf_message(
  "ObjectGenericUnion",
)(typia.protobuf.message<ObjectGenericUnion>());