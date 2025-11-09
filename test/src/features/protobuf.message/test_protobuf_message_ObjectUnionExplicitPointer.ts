import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectUnionExplicitPointer = (): void => _test_protobuf_message(
  "ObjectUnionExplicitPointer",
)(typia.protobuf.message<ObjectUnionExplicitPointer>());