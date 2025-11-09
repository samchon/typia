import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertDecodeCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
      decode: (input) =>
        typia.protobuf.assertDecode<ArrayHierarchicalPointer>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<ArrayHierarchicalPointer>(),
    });
