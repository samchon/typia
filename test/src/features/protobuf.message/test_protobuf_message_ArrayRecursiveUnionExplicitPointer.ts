import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_message_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_message("ArrayRecursiveUnionExplicitPointer")(
    typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
  );
