import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_decode_ArrayHierarchicalPointer = (): void =>
  _test_protobuf_decode("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )({
    decode: (input) => typia.protobuf.decode<ArrayHierarchicalPointer>(input),
    encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
  });
