import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertEqualsParametersAsyncCustom_ArrayRecursiveUnionExplicit =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
