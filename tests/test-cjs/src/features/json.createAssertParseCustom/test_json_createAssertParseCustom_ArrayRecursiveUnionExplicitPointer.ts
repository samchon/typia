import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createAssertParseCustom_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.json.createAssertParse<ArrayRecursiveUnionExplicitPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
