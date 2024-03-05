import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsParametersCustom_TypeTagMatrix =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
