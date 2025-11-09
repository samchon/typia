import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsReturnCustom_FunctionalObjectUnion =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
