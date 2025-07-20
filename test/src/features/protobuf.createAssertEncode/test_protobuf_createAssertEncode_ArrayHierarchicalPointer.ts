import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_createAssertEncode_ArrayHierarchicalPointer =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
      encode: typia.protobuf.createAssertEncode<ArrayHierarchicalPointer>(),
      decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
      message: typia.protobuf.message<ArrayHierarchicalPointer>(),
    });
