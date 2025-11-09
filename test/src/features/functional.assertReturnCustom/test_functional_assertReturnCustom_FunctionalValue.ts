import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertReturnCustom_FunctionalValue = (): void =>
  _test_functional_assertReturn(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => FunctionalValue) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
