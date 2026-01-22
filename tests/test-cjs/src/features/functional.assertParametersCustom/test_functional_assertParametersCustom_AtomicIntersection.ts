import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertParametersCustom_AtomicIntersection =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("AtomicIntersection")(
      AtomicIntersection,
    )((p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
