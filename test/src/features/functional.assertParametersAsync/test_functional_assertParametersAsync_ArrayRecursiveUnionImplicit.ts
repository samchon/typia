import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayRecursiveUnionImplicit =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.assertParameters(p),
  );
