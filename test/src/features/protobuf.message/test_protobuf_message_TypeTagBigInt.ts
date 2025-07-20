import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_message_TypeTagBigInt = (): void =>
  _test_protobuf_message("TypeTagBigInt")(
    typia.protobuf.message<TypeTagBigInt>(),
  );
