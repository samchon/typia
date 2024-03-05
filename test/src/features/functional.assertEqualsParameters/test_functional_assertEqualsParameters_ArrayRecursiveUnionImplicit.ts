import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertEqualsParameters_ArrayRecursiveUnionImplicit =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
      typia.functional.assertEqualsParameters(p),
  );
