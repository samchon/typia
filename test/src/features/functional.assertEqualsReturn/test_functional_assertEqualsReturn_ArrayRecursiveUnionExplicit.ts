import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertEqualsReturn_ArrayRecursiveUnionExplicit =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
      typia.functional.assertEqualsReturn(p),
  );
