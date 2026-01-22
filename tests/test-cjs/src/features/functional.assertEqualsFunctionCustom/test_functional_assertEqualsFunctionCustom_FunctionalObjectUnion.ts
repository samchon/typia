import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsFunctionCustom_FunctionalObjectUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
