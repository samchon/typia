import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_message_TypeTagFormat = (): void =>
  _test_protobuf_message("TypeTagFormat")(
    typia.protobuf.message<TypeTagFormat>(),
  );
