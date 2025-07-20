import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsParametersCustom_TypeTagArray =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagArray")(
      TypeTagArray,
    )((p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
