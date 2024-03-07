import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ArrayHierarchicalPointer =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    encode: typia.protobuf.createAssertEncode<ArrayHierarchicalPointer>(),
    decode: typia.protobuf.createDecode<ArrayHierarchicalPointer>(),
    message: typia.protobuf.message<ArrayHierarchicalPointer>(),
  });
