import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsReturnCustom_FunctionalValueUnion =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "FunctionalValueUnion",
    )(FunctionalValueUnion)(
      (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
