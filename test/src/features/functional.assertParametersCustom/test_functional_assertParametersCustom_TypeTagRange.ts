import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagRange =
  _test_functional_assertParameters(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
