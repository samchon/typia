import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_assertStringifyCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.json.assertStringify<ArrayRecursiveUnionExplicitPointer>(
          input,
          (p) => new CustomGuardError(p),
        ),
    );
