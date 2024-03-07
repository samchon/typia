import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_AtomicIntersection =
  _test_functional_assertReturn(CustomGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
