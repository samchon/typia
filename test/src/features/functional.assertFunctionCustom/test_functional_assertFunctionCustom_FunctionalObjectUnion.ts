import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertFunctionCustom_FunctionalObjectUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("FunctionalObjectUnion")(
      FunctionalObjectUnion,
    )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
