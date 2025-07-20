import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertEqualsParametersCustom_TypeTagObjectUnion =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "TypeTagObjectUnion",
    )(TypeTagObjectUnion)(
      (p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
