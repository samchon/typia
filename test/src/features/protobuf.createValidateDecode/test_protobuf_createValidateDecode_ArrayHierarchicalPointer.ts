import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createValidateDecode_ArrayHierarchicalPointer =
  (): void =>
    _test_protobuf_validateDecode(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
      decode: typia.protobuf.createValidateDecode<ArrayHierarchicalPointer>(),
      encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
    });
