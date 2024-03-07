import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArrayRecursiveUnionExplicit =
  _test_functional_assertParameters(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
      typia.functional.assertParameters(p),
  );
