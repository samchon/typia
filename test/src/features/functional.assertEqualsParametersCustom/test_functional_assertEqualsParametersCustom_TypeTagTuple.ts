import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsParametersCustom_TypeTagTuple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagTuple")(
      TypeTagTuple,
    )((p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
