import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_message_ObjectGenericArray = (): void =>
  _test_protobuf_message("ObjectGenericArray")(
    typia.protobuf.message<ObjectGenericArray>(),
  );
