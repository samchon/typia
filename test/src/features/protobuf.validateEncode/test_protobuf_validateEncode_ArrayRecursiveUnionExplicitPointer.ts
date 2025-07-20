import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_validateEncode_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_validateEncode(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      encode: (input) =>
        typia.protobuf.validateEncode<ArrayRecursiveUnionExplicitPointer>(
          input,
        ),
      decode: typia.protobuf.createDecode<ArrayRecursiveUnionExplicitPointer>(),
      message: typia.protobuf.message<ArrayRecursiveUnionExplicitPointer>(),
    });
