import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateParametersAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("AtomicUnion")(AtomicUnion)(
      (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
        typia.functional.validateParameters(p),
    );
