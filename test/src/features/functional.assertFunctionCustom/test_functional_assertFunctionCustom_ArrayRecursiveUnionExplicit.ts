import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertFunctionCustom_ArrayRecursiveUnionExplicit =
  _test_functional_assertFunction(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
