import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertParametersCustom_TypeTagCustom =
  _test_functional_assertParameters(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
