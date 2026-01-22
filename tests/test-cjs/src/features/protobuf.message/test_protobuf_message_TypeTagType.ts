import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_message_TypeTagType = (): void =>
  _test_protobuf_message("TypeTagType")(typia.protobuf.message<TypeTagType>());
