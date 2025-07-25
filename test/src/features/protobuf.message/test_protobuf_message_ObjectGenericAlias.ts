import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_message_ObjectGenericAlias = (): void =>
  _test_protobuf_message("ObjectGenericAlias")(
    typia.protobuf.message<ObjectGenericAlias>(),
  );
