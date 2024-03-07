import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ArrayRecursiveUnionExplicit =
  _test_functional_assertReturn(TypeGuardError)("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )((p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
    typia.functional.assertReturn(p),
  );
