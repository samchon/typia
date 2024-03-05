import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertEqualsReturnCustom_TypeTagMatrix =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )((p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
