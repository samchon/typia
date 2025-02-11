import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertFunctionAsync_AtomicSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertFunction(p),
  );
