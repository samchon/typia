import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertReturnCustom_AtomicIntersection = (): void =>
  _test_functional_assertReturn(CustomGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
