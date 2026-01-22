import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertParametersCustom_TypeTagInfinite =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TypeTagInfinite")(
      TypeTagInfinite,
    )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
