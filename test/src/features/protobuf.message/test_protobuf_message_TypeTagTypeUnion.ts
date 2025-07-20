import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_message_TypeTagTypeUnion = (): void =>
  _test_protobuf_message("TypeTagTypeUnion")(
    typia.protobuf.message<TypeTagTypeUnion>(),
  );
