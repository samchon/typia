import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_equalsFunctionAsync_ArrayAtomicAlias =
  _test_functional_equalsFunctionAsync("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
      typia.functional.equalsFunction(p),
  );
