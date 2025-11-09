import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertReturn_AtomicSimple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.assertReturn(p),
  );
