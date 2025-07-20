import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsParametersCustom_ClassGetter =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
