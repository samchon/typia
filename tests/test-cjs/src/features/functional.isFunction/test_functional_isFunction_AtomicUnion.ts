import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isFunction_AtomicUnion = (): void =>
  _test_functional_isFunction("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.isFunction(p),
  );
