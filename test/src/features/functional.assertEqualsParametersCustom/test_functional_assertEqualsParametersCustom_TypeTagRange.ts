import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsParametersCustom_TypeTagRange =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
