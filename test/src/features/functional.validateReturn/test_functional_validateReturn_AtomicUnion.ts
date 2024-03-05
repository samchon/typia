import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateReturn_AtomicUnion =
  _test_functional_validateReturn("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.validateReturn(p),
  );
