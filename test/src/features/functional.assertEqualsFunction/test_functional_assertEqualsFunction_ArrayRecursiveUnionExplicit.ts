import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertEqualsFunction_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ArrayRecursiveUnionExplicit",
    )(ArrayRecursiveUnionExplicit)(
      (
        p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit,
      ) => typia.functional.assertEqualsFunction(p),
    );
