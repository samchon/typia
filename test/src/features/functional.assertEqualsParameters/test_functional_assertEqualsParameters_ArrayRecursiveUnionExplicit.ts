import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertEqualsParameters_ArrayRecursiveUnionExplicit =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
      typia.functional.assertEqualsParameters(p),
  );
