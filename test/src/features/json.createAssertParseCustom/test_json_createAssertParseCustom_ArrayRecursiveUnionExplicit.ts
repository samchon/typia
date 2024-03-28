import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createAssertParseCustom_ArrayRecursiveUnionExplicit =
  _test_json_assertParse(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.json.createAssertParse<ArrayRecursiveUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
