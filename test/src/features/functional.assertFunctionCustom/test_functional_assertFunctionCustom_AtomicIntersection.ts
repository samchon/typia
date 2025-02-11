import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertFunctionCustom_AtomicIntersection =
  _test_functional_assertFunction(CustomGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
