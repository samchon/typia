import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertFunction_AtomicSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.assertFunction(p),
  );
