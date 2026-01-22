import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_assertDecodeCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      decode: (input) =>
        typia.protobuf.assertDecode<ArrayRecursiveUnionExplicitPointer>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
