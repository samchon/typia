import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_assertStringifyCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.json.assertStringify<ArrayRecursiveUnionImplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
