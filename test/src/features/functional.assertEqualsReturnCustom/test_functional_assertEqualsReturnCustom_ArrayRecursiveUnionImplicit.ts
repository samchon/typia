import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertEqualsReturnCustom_ArrayRecursiveUnionImplicit =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
