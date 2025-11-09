import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsFunctionAsync_AtomicAlias =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("AtomicAlias")(AtomicAlias)(
      (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
        typia.functional.validateEqualsFunction(p),
    );
