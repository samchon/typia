import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsParametersCustom_TypeTagLength =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagLength")(
      TypeTagLength,
    )((p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
