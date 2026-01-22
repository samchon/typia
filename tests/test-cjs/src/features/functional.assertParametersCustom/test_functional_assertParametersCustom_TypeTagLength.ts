import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertParametersCustom_TypeTagLength = (): void =>
  _test_functional_assertParameters(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
