import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_message_ObjectNullable = (): void =>
  _test_protobuf_message("ObjectNullable")(
    typia.protobuf.message<ObjectNullable>(),
  );
