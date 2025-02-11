import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertReturnCustom_ArrayRecursiveUnionImplicit =
  _test_functional_assertReturn(CustomGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
