import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertEqualsParametersAsync_ArrayAtomicAlias =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ArrayAtomicAlias",
  )(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      typia.functional.assertEqualsParameters(p),
  );
