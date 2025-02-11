import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsParametersCustom_AtomicIntersection =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "AtomicIntersection",
  )(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
