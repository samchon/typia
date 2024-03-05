import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertParametersCustom_ClassGetter =
  _test_functional_assertParameters(CustomGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => ClassGetter) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
