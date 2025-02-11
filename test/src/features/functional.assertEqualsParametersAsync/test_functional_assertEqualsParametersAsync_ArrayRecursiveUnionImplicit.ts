import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertEqualsParametersAsync_ArrayRecursiveUnionImplicit =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )(ArrayRecursiveUnionImplicit)(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) => typia.functional.assertEqualsParameters(p),
  );
