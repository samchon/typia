import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateParametersAsync_ArrayAtomicAlias =
  _test_functional_validateParametersAsync("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.validateParameters(p),
  );
