import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_isParametersAsync_ArrayAtomicAlias =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ArrayAtomicAlias")(ArrayAtomicAlias)(
      (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
        typia.functional.isParameters(p),
    );
