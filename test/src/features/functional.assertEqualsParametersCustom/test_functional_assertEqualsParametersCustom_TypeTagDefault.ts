import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsParametersCustom_TypeTagDefault =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
