import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_message_TypeTagRangeBigInt = _test_protobuf_message(
  "TypeTagRangeBigInt",
)(typia.protobuf.message<TypeTagRangeBigInt>());
