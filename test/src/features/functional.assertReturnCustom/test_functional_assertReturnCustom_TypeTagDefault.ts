import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertReturnCustom_TypeTagDefault =
  _test_functional_assertReturn(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
