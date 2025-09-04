import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_message_TypeTagCustom = (): void =>
  _test_protobuf_message("TypeTagCustom")(
    typia.protobuf.message<TypeTagCustom>(),
  );
