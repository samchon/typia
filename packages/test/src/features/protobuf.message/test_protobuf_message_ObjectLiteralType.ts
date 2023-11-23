import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_message_ObjectLiteralType = _test_protobuf_message(
  "ObjectLiteralType",
)(typia.protobuf.message<ObjectLiteralType>());
