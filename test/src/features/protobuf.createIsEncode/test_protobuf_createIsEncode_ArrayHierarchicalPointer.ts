import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createIsEncode_ArrayHierarchicalPointer = (): void =>
  _test_protobuf_isEncode("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )({
    encode: typia.protobuf.createIsEncode<ArrayHierarchicalPointer>(),
    decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
    message: typia.protobuf.message<ArrayHierarchicalPointer>(),
  });
