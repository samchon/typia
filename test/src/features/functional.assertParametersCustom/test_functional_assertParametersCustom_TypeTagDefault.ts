import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertParametersCustom_TypeTagDefault =
  _test_functional_assertParameters(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
