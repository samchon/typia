import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_message_TypeTagRange = _test_protobuf_message(
  "TypeTagRange",
)(typia.protobuf.message<TypeTagRange>());
