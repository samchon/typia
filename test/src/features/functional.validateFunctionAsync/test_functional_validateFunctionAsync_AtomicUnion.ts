import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateFunctionAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("AtomicUnion")(AtomicUnion)(
      (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
        typia.functional.validateFunction(p),
    );
