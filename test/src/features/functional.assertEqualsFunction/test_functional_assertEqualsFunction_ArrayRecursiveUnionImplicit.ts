import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ArrayRecursiveUnionImplicit =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
      typia.functional.assertEqualsFunction(p),
  );
