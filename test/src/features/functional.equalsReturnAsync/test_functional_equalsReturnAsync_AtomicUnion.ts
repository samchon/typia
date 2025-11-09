import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsReturnAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("AtomicUnion")(AtomicUnion)(
      (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
        typia.functional.equalsReturn(p),
    );
