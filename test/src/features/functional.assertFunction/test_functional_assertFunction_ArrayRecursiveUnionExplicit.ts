import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertFunction_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_functional_assertFunction(TypeGuardError)(
      "ArrayRecursiveUnionExplicit",
    )(ArrayRecursiveUnionExplicit)(
      (
        p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit,
      ) => typia.functional.assertFunction(p),
    );
