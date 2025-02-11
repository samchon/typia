import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertReturn_ArrayRecursiveUnionExplicit =
  _test_functional_assertReturn(TypeGuardError)("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )((p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
    typia.functional.assertReturn(p),
  );
