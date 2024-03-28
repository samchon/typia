import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsFunctionAsync_AtomicSimple =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsFunction(p),
  );
