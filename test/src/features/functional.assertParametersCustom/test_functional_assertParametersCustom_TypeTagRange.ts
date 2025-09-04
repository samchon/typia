import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertParametersCustom_TypeTagRange = (): void =>
  _test_functional_assertParameters(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
