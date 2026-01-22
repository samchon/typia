import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsParametersCustom_ArrayUnion =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ArrayUnion")(
      ArrayUnion,
    )((p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
