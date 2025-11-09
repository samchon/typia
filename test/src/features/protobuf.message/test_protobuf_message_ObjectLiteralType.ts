import typia from "typia";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectLiteralType = (): void => _test_protobuf_message(
  "ObjectLiteralType",
)(typia.protobuf.message<ObjectLiteralType>());