import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsParametersCustom_TypeTagCustom =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
