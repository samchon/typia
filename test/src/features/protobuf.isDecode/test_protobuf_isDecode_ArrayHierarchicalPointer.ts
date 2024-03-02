import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_isDecode_ArrayHierarchicalPointer =
  _test_protobuf_isDecode("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )({
    decode: (input) => typia.protobuf.isDecode<ArrayHierarchicalPointer>(input),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
