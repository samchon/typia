import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_message_TypeTagArray = (): void =>
  _test_protobuf_message("TypeTagArray")(
    typia.protobuf.message<TypeTagArray>(),
  );
