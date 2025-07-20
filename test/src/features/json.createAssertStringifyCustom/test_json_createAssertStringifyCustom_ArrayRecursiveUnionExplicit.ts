import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createAssertStringifyCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
      typia.json.createAssertStringify<ArrayRecursiveUnionExplicit>(
        (p) => new CustomGuardError(p),
      ),
    );
