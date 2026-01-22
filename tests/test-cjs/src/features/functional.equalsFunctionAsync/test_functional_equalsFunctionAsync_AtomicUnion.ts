import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsFunctionAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("AtomicUnion")(AtomicUnion)(
      (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
        typia.functional.equalsFunction(p),
    );
