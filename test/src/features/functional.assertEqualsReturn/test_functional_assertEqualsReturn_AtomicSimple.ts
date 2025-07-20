import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsReturn_AtomicSimple = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertEqualsReturn(p),
  );
