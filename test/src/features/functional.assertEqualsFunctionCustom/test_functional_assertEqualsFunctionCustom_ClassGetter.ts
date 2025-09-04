import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsFunctionCustom_ClassGetter =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
