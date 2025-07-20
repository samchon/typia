import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsReturnCustom_TypeTagDefault =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagDefault")(
      TypeTagDefault,
    )((p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
