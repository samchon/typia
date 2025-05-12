import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertParametersCustom_TypeTagPattern =
  _test_functional_assertParameters(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
