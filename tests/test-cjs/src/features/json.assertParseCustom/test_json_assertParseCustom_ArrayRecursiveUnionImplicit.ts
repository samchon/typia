import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_assertParseCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
      typia.json.assertParse<ArrayRecursiveUnionImplicit>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
