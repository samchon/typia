import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createAssertEncode_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_assertEncode(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    encode:
      typia.protobuf.createAssertEncode<ArrayRecursiveUnionExplicitPointer>(),
    decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
    message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
  });
