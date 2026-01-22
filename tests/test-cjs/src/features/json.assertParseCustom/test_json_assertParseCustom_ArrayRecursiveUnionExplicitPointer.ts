import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_assertParseCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      (input) =>
        typia.json.assertParse<ArrayRecursiveUnionExplicitPointer>(
          input,
          (p) => new CustomGuardError(p),
        ),
    );
