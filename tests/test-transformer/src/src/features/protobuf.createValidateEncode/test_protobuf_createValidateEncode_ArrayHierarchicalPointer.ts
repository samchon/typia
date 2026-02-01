import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createValidateEncode_ArrayHierarchicalPointer = (): void => _test_protobuf_validateEncode(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
  encode: typia.protobuf.createValidateEncode<ArrayHierarchicalPointer>(),
  decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
  message: typia.protobuf.message<ArrayHierarchicalPointer>(),
});
