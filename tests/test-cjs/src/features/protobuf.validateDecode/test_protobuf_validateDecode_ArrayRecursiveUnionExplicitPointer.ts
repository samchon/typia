import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_validateDecode_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_validateDecode(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      decode: (input) =>
        typia.protobuf.validateDecode<ArrayRecursiveUnionExplicitPointer>(
          input,
        ),
      encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
