import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createIsDecode_ArrayHierarchicalPointer = (): void => _test_protobuf_isDecode(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
  decode: typia.protobuf.createIsDecode<ArrayHierarchicalPointer>(),
  encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
});
