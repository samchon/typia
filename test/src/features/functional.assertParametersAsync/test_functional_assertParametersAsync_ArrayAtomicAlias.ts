import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayAtomicAlias =
  _test_functional_assertParametersAsync(TypeGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.assertParameters(p),
  );
