import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isReturn_AtomicUnion = (): void =>
  _test_functional_isReturn("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.isReturn(p),
  );
