import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_message_ArrayHierarchicalPointer =
  _test_protobuf_message("ArrayHierarchicalPointer")(
    typia.protobuf.message<ArrayHierarchicalPointer>(),
  );
