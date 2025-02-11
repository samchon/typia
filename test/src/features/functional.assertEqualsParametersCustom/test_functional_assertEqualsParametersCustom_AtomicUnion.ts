import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsParametersCustom_AtomicUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => AtomicUnion) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
