import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsParametersCustom_TypeTagNaN =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
