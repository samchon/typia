import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_message_TypeTagNaN = _test_protobuf_message(
  "TypeTagNaN",
)(typia.protobuf.message<TypeTagNaN>());
