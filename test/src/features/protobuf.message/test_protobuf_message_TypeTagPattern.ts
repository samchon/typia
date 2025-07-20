import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_message_TypeTagPattern = (): void =>
  _test_protobuf_message("TypeTagPattern")(
    typia.protobuf.message<TypeTagPattern>(),
  );
