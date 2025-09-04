import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsReturnCustom_TypeTagInfinite =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
