import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateFunctionAsync_AtomicAlias =
  _test_functional_validateFunctionAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.validateFunction(p),
  );
