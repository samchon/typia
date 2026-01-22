import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_protobuf_message_ObjectHttpTypeTag = (): void =>
  _test_protobuf_message("ObjectHttpTypeTag")(
    typia.protobuf.message<ObjectHttpTypeTag>(),
  );
