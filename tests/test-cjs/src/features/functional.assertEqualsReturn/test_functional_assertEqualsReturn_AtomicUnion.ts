import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsReturn_AtomicUnion = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => AtomicUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
