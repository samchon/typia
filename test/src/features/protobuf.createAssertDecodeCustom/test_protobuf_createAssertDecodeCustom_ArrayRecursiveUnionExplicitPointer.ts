import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createAssertDecodeCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
      decode:
        typia.protobuf.createAssertDecode<ArrayRecursiveUnionExplicitPointer>(
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<ArrayRecursiveUnionExplicitPointer>(),
    });
