import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsParametersCustom_ArraySimple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ArraySimple")(
      ArraySimple,
    )((p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
