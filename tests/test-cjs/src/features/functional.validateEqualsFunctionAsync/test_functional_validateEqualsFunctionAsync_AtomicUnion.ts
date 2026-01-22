import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsFunctionAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("AtomicUnion")(AtomicUnion)(
      (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
        typia.functional.validateEqualsFunction(p),
    );
