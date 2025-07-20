import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertParametersCustom_FunctionalValueUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
