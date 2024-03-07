import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_AtomicUnion =
  _test_functional_assertReturn(TypeGuardError)("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.assertReturn(p),
  );
