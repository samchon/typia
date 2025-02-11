import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertReturnCustom_TypeTagLength =
  _test_functional_assertReturn(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
